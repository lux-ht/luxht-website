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
    }
  `;
  document.head.appendChild(styles);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectBookingStyles);
} else {
  injectBookingStyles();
}
