/**
 * LUXHT Services Page Scripts
 */

function injectServicesStyles() {
  const styles = document.createElement('style');
  styles.textContent = `
    /* Page Hero */
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
    
    /* Service Detail Cards */
    .services-detail-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-8);
    }
    
    .service-detail-card {
      padding: var(--space-10);
    }
    
    .service-number {
      font-family: var(--font-display);
      font-size: var(--text-4xl);
      margin-bottom: var(--space-4);
    }
    
    .service-detail-card h3 {
      margin-bottom: var(--space-4);
    }
    
    .service-detail-card p {
      margin-bottom: var(--space-6);
      max-width: none;
    }
    
    .service-features {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
    }
    
    .service-features li {
      font-size: var(--text-sm);
      color: var(--text-muted);
      padding-left: var(--space-4);
      position: relative;
    }
    
    .service-features li::before {
      content: '—';
      position: absolute;
      left: 0;
      color: var(--gold-primary);
    }
    
    /* Process Steps */
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
    
    /* CTA */
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
      
      .services-detail-grid {
        grid-template-columns: 1fr;
      }
      
      .cta-card {
        padding: var(--space-12) var(--space-6);
      }
    }
  `;
  document.head.appendChild(styles);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectServicesStyles);
} else {
  injectServicesStyles();
}
