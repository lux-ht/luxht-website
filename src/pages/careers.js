/**
 * LUXHT Careers Page Scripts
 */

function injectCareersStyles() {
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
    
    .why-join-content h2 {
      margin-bottom: var(--space-4);
    }
    
    .benefit-item {
      padding: var(--space-6);
    }
    
    .benefit-icon {
      font-size: var(--text-2xl);
      margin-bottom: var(--space-3);
    }
    
    .benefit-item h4 {
      margin-bottom: var(--space-2);
    }
    
    .benefit-item p {
      font-size: var(--text-sm);
      color: var(--text-muted);
      max-width: none;
    }
    
    .positions-grid {
      display: flex;
      flex-direction: column;
      gap: var(--space-6);
    }
    
    .position-card {
      padding: var(--space-8);
    }
    
    .position-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: var(--space-6);
      margin-bottom: var(--space-4);
      flex-wrap: wrap;
    }
    
    .position-header h3 {
      margin-bottom: var(--space-1);
    }
    
    .position-type {
      font-size: var(--text-sm);
      color: var(--text-muted);
    }
    
    .position-card > p {
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
      
      .position-header {
        flex-direction: column;
      }
      
      .cta-card {
        padding: var(--space-12) var(--space-6);
      }
    }
  `;
  document.head.appendChild(styles);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectCareersStyles);
} else {
  injectCareersStyles();
}
