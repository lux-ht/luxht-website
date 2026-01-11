/**
 * LUXHT Projects Page Scripts
 */

function injectProjectsStyles() {
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
    
    .portfolio-full-grid {
      display: flex;
      flex-direction: column;
      gap: var(--space-20);
    }
    
    .portfolio-full-item {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: var(--space-12);
      align-items: center;
    }
    
    .portfolio-full-item:nth-child(even) {
      grid-template-columns: 1fr 1.5fr;
    }
    
    .portfolio-full-item:nth-child(even) .portfolio-image {
      order: 2;
    }
    
    .portfolio-full-item:nth-child(even) .portfolio-details {
      order: 1;
      text-align: right;
    }
    
    .portfolio-image {
      height: 400px;
      border-radius: var(--radius-lg);
      overflow: hidden;
    }
    
    .portfolio-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .portfolio-full-item:last-child .portfolio-image {
      height: auto;
    }
    
    .portfolio-full-item:last-child .portfolio-image img {
      height: auto;
      object-fit: contain;
    }
    
    .portfolio-details {
      padding: var(--space-4);
    }
    
    .portfolio-category {
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      letter-spacing: var(--tracking-widest);
      text-transform: uppercase;
      margin-bottom: var(--space-3);
      display: block;
    }
    
    .portfolio-details h3 {
      margin-bottom: var(--space-4);
    }
    
    .portfolio-details p {
      margin-bottom: var(--space-6);
      max-width: none;
    }
    
    .portfolio-location {
      font-size: var(--text-sm);
      color: var(--text-light);
      font-style: italic;
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
      
      .portfolio-full-item,
      .portfolio-full-item:nth-child(even) {
        grid-template-columns: 1fr;
      }
      
      .portfolio-full-item:nth-child(even) .portfolio-image,
      .portfolio-full-item:nth-child(even) .portfolio-details {
        order: unset;
        text-align: left;
      }
      
      .portfolio-image {
        height: 300px;
      }
      
      .cta-card {
        padding: var(--space-12) var(--space-6);
      }
    }
  `;
  document.head.appendChild(styles);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectProjectsStyles);
} else {
  injectProjectsStyles();
}
