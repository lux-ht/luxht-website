/**
 * LUXHT Book Online Page Scripts
 */

function injectBookingStyles() {
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
    
    .booking-grid {
      align-items: stretch;
    }
    
    .booking-card {
      padding: var(--space-10);
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    
    .booking-icon {
      font-size: var(--text-4xl);
      margin-bottom: var(--space-4);
    }
    
    .booking-card h3 {
      margin-bottom: var(--space-4);
    }
    
    .booking-card > p {
      margin-bottom: var(--space-6);
      max-width: none;
    }
    
    .booking-features {
      flex: 1;
      margin-bottom: var(--space-8);
    }
    
    .booking-features li {
      padding: var(--space-2) 0;
      font-size: var(--text-sm);
      color: var(--text-secondary);
    }
    
    .expect-content {
      display: flex;
      flex-direction: column;
      gap: var(--space-10);
    }
    
    .expect-item {
      display: flex;
      gap: var(--space-8);
      align-items: flex-start;
    }
    
    .expect-number {
      font-family: var(--font-display);
      font-size: var(--text-5xl);
      font-weight: var(--font-normal);
      flex-shrink: 0;
      width: 80px;
    }
    
    .expect-text h4 {
      margin-bottom: var(--space-2);
    }
    
    .expect-text p {
      max-width: none;
    }
    
    .cta-card {
      padding: var(--space-12) var(--space-8);
    }
    
    .cta-card h3 {
      margin-bottom: var(--space-3);
    }
    
    .cta-card p {
      max-width: none;
    }
    
    /* Contact Options Buttons */
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
    
    /* Luxury Form Inputs for Gold Card */
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
    
    .communication-grid {
      align-items: stretch;
    }

    .communication-grid .booking-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    @media (max-width: 768px) {
      .page-hero {
        padding: 140px 0 60px;
      }
      
      .expect-item {
        flex-direction: column;
        gap: var(--space-3);
      }
      
      .expect-number {
        font-size: var(--text-4xl);
        width: auto;
      }
      
      .cta-card {
        padding: var(--space-8) var(--space-6);
      }

      .communication-grid {
        grid-template-columns: 1fr;
      }
    }
  `;
  document.head.appendChild(styles);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectBookingStyles);
} else {
  injectBookingStyles();
}
