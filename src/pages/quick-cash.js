/**
 * LUXHT Quick Cash Page Scripts
 */

function injectQuickCashStyles() {
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
    
    .benefit-card {
      padding: var(--space-8);
    }
    
    .benefit-icon {
      font-size: var(--text-3xl);
      margin-bottom: var(--space-4);
    }
    
    .benefit-card h4 {
      margin-bottom: var(--space-3);
    }
    
    .benefit-card p {
      font-size: var(--text-sm);
      color: var(--text-muted);
      max-width: none;
    }
    
    .step-number {
      font-family: var(--font-display);
      font-size: var(--text-5xl);
      margin-bottom: var(--space-4);
    }
    
    .process-step h4 {
      margin-bottom: var(--space-2);
    }
    
    .process-step p {
      font-size: var(--text-sm);
      color: var(--text-muted);
      max-width: none;
    }
    
    .cta-card {
      padding: var(--space-20) var(--space-8);
    }
    
    .cta-content h2 {
      margin: var(--space-4) 0 var(--space-6);
    }
    
    .cta-content .lead {
      margin: 0 auto var(--space-10);
      max-width: 500px;
    }
    
    .cta-buttons {
      display: flex;
      gap: var(--space-4);
      justify-content: center;
      flex-wrap: wrap;
    }
    
    /* Sell Form Section */
    .sell-form-grid {
      align-items: stretch;
    }

    .sell-form-card {
      padding: var(--space-10);
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .sell-form-card h3 {
      margin-bottom: var(--space-4);
    }

    .sell-form-card > p {
      margin-bottom: var(--space-6);
    }

    .booking-icon {
      font-size: var(--text-4xl);
      margin-bottom: var(--space-4);
    }

    /* Contact Options */
    .contact-options {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      margin-top: var(--space-6);
    }

    .contact-options a {
      width: 100%;
      text-align: center;
    }

    /* Form Styling */
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-4);
    }

    .form-group {
      margin-bottom: var(--space-4);
    }

    .form-group label {
      display: block;
      font-size: var(--text-xs);
      font-weight: var(--font-semibold);
      letter-spacing: var(--tracking-wider);
      text-transform: uppercase;
      color: var(--text-primary);
      margin-bottom: var(--space-2);
    }

    .luxury-card-gold .form-group label {
      color: var(--gold-dark);
    }

    .input-luxury-light {
      width: 100%;
      padding: var(--space-3) var(--space-4);
      font-family: var(--font-body);
      font-size: var(--text-sm);
      color: var(--text-primary);
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid rgba(212, 175, 55, 0.3);
      border-radius: var(--radius-sm);
      transition: all var(--duration-normal) var(--ease-elegant);
    }

    .input-luxury-light:focus {
      outline: none;
      border-color: var(--gold-primary);
      box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);
      background: #fff;
    }

    .input-luxury-light::placeholder {
      color: var(--text-muted);
    }

    select.input-luxury-light {
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23B8860B' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right var(--space-4) center;
      padding-right: var(--space-10);
      cursor: pointer;
    }

    textarea.input-luxury-light {
      resize: vertical;
      min-height: 80px;
    }

    .full-width {
      width: 100%;
    }

    .mt-4 {
      margin-top: var(--space-4);
    }

    .mb-6 {
      margin-bottom: var(--space-6);
    }

    .text-sm {
      font-size: var(--text-sm);
      color: var(--text-muted);
    }
    
    @media (max-width: 768px) {
      .page-hero {
        padding: 140px 0 60px;
      }
      
      .cta-card {
        padding: var(--space-12) var(--space-6);
      }

      .sell-form-grid {
        grid-template-columns: 1fr;
      }

      .form-row {
        grid-template-columns: 1fr;
      }

      /* Why Choose Us section - mobile fix */
      .benefits .section-header {
        grid-template-columns: 1fr !important;
        text-align: center !important;
      }

      .benefits .section-header img {
        height: auto !important;
        max-height: 250px;
        width: 100% !important;
        object-fit: contain !important;
        margin-top: var(--space-6);
      }
    }
  `;
  document.head.appendChild(styles);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    injectQuickCashStyles();
    initSmoothScroll();
  });
} else {
  injectQuickCashStyles();
  initSmoothScroll();
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
