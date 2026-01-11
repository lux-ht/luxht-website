/**
 * LUXHT Apply Page Scripts
 */

function injectApplyStyles() {
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
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .application-card {
      padding: var(--space-12);
    }
    
    .application-form {
      display: flex;
      flex-direction: column;
      gap: var(--space-10);
    }
    
    .form-section h3 {
      font-size: var(--text-lg);
      margin-bottom: var(--space-6);
      padding-bottom: var(--space-3);
      border-bottom: 1px solid rgba(0,0,0,0.1);
    }
    
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-4);
    }
    
    .form-group {
      margin-bottom: var(--space-5);
    }
    
    .form-group label {
      display: block;
      font-size: var(--text-sm);
      font-weight: var(--font-medium);
      color: var(--text-secondary);
      margin-bottom: var(--space-2);
    }
    
    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: var(--space-4);
      font-family: var(--font-body);
      font-size: var(--text-base);
      border: 1px solid rgba(0,0,0,0.15);
      border-radius: var(--radius-md);
      background: white;
      transition: all var(--transition-fast);
    }
    
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--gold-primary);
      box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
    }
    
    .form-group textarea {
      resize: vertical;
      min-height: 120px;
    }
    
    .form-group select {
      cursor: pointer;
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23666' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right var(--space-4) center;
      padding-right: var(--space-10);
    }
    
    .form-actions {
      text-align: center;
      padding-top: var(--space-6);
      border-top: 1px solid rgba(0,0,0,0.1);
    }
    
    .form-actions .btn-gold {
      min-width: 200px;
    }
    
    .form-note {
      margin-top: var(--space-4);
      font-size: var(--text-sm);
      color: var(--text-muted);
    }
    
    .form-note a {
      color: var(--gold-dark);
    }
    
    .success-message {
      text-align: center;
      padding: var(--space-12);
    }
    
    .success-icon {
      font-size: var(--text-6xl);
      margin-bottom: var(--space-6);
    }
    
    .success-message h3 {
      margin-bottom: var(--space-4);
    }
    
    .success-message p {
      margin-bottom: var(--space-8);
      color: var(--text-secondary);
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }
    
    @media (max-width: 768px) {
      .page-hero {
        padding: 140px 0 60px;
      }
      
      .application-card {
        padding: var(--space-8);
      }
      
      .form-row {
        grid-template-columns: 1fr;
      }
    }
  `;
    document.head.appendChild(styles);
}

function initApplicationForm() {
    const form = document.getElementById('applicationForm');
    const successMessage = document.getElementById('successMessage');

    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;

            // Collect form data
            const formData = new FormData(form);

            // Check if Formspree is configured
            const formAction = form.getAttribute('action');
            if (formAction && !formAction.includes('YOUR_FORM_ID')) {
                // Send to Formspree
                try {
                    const response = await fetch(formAction, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });

                    if (response.ok) {
                        // Success - show message
                        form.style.display = 'none';
                        successMessage.style.display = 'block';
                        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    } else {
                        throw new Error('Form submission failed');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    alert('There was an error submitting your application. Please try again or email us directly at careers@luxht.com');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
            } else {
                // Formspree not configured - show success anyway for demo
                console.log('Application submitted:', Object.fromEntries(formData));
                console.log('Note: Configure Formspree to receive actual emails');
                form.style.display = 'none';
                successMessage.style.display = 'block';
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    // Check for position parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const position = urlParams.get('position');
    if (position) {
        const positionSelect = document.getElementById('position');
        if (positionSelect) {
            // Try to match the position
            for (let option of positionSelect.options) {
                if (option.value.toLowerCase().includes(position.toLowerCase()) ||
                    position.toLowerCase().includes(option.value.toLowerCase())) {
                    positionSelect.value = option.value;
                    break;
                }
            }
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        injectApplyStyles();
        initApplicationForm();
    });
} else {
    injectApplyStyles();
    initApplicationForm();
}
