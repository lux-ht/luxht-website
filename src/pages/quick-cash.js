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
    
    @media (max-width: 768px) {
      .page-hero {
        padding: 140px 0 60px;
      }
      
      .cta-card {
        padding: var(--space-12) var(--space-6);
      }
    }
  `;
  document.head.appendChild(styles);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectQuickCashStyles);
} else {
  injectQuickCashStyles();
}
