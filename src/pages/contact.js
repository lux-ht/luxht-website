/**
 * LUXHT Contact Page Scripts
 */

function injectContactStyles() {
  const styles = document.createElement('style');
  styles.textContent = `
    .page-hero {
      padding: 180px 0 80px;
    }
    
    .page-hero-content h1 {
      margin: var(--space-4) 0 var(--space-6);
    }
    
    .page-hero-content .lead {
      text-align: center;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .contact-grid {
      align-items: start;
    }
    
    .contact-form-wrapper {
      padding: var(--space-10);
    }
    
    .contact-form-wrapper h3 {
      margin-bottom: var(--space-8);
    }
    
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-6);
    }
    
    .form-group {
      margin-bottom: var(--space-5);
    }
    
    .form-group label {
      display: block;
      font-size: var(--text-sm);
      font-weight: var(--font-medium);
      margin-bottom: var(--space-2);
    }
    
    .form-group select {
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%236B6B6B' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right var(--space-4) center;
    }
    
    .form-group textarea {
      resize: vertical;
      min-height: 120px;
    }
    
    .contact-info {
      padding: var(--space-4);
    }
    
    .info-block h3 {
      margin-bottom: var(--space-6);
    }
    
    .info-items {
      display: flex;
      flex-direction: column;
      gap: var(--space-5);
    }
    
    .info-item {
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
    }
    
    .info-label {
      font-size: var(--text-xs);
      font-weight: var(--font-semibold);
      letter-spacing: var(--tracking-wider);
      text-transform: uppercase;
    }
    
    .info-item p,
    .info-item a {
      font-size: var(--text-base);
      color: var(--text-secondary);
    }
    
    .hours-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    }
    
    .hours-item {
      display: flex;
      justify-content: space-between;
      font-size: var(--text-sm);
      color: var(--text-secondary);
    }
    
    @media (max-width: 768px) {
      .page-hero {
        padding: 140px 0 60px;
      }
      
      .form-row {
        grid-template-columns: 1fr;
      }
      
      .contact-grid {
        gap: var(--space-10);
      }
    }
  `;
  document.head.appendChild(styles);
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Initialize Address Autocomplete
  import('../utils/address-autocomplete.js').then(module => {
    module.initAddressAutocomplete('address');
  }).catch(err => console.error('Failed to load autocomplete', err));

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      // Dynamic import to avoid issues if module loading fails
      const { supabase } = await import('../supa-client.js');

      const { error } = await supabase
        .from('leads')
        .insert({
          type: 'contact',
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          address: data.address,
          phone: data.phone,
          message: data.message,
          metadata: { project_type: data.project }
        });

      if (error) throw error;

      // SUCCESS: Use new Modal
      import('../utils/modal.js').then(({ showSuccessModal }) => {
        showSuccessModal(
          'Message Sent',
          'Thank you for contacting LUXHT. We have received your message and will be in touch shortly.',
          () => {
            form.reset();
          }
        );
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again or email us directly.');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    injectContactStyles();
    initContactForm();
  });
} else {
  injectContactStyles();
  initContactForm();
}
