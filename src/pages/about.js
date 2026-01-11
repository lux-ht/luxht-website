/**
 * LUXHT About Page Scripts
 */

function injectAboutStyles() {
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
    
    .story-content h2 {
      margin-bottom: var(--space-6);
    }
    
    .story-content .lead {
      margin-bottom: var(--space-8);
    }
    
    .story-content p {
      margin-bottom: var(--space-4);
      max-width: none;
    }
    
    .value-card {
      padding: var(--space-8);
    }
    
    .value-icon {
      font-size: var(--text-3xl);
      margin-bottom: var(--space-4);
    }
    
    .value-card h4 {
      margin-bottom: var(--space-3);
    }
    
    .value-card p {
      font-size: var(--text-sm);
      color: var(--text-muted);
      max-width: none;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-8);
      text-align: center;
    }
    
    .stat-item {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
    }
    
    .stat-number {
      font-family: var(--font-display);
      font-size: var(--text-5xl);
      font-weight: var(--font-normal);
    }
    
    .stat-label {
      font-size: var(--text-sm);
      font-weight: var(--font-medium);
      letter-spacing: var(--tracking-wider);
      text-transform: uppercase;
      color: var(--text-muted);
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
    
    /* Heritage Section */
    .heritage-grid {
      margin-bottom: var(--space-16);
    }
    
    .heritage-card {
      padding: var(--space-6);
      background: var(--bg-white);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-sm);
      border-left: 3px solid var(--gold-primary);
    }
    
    .heritage-card h4 {
      font-size: var(--text-lg);
      margin-bottom: var(--space-3);
      color: var(--text-primary);
    }
    
    .heritage-card p {
      font-size: var(--text-sm);
      color: var(--text-muted);
      line-height: var(--leading-relaxed);
      max-width: none;
    }
    
    .heritage-showcase {
      margin-bottom: var(--space-12);
    }
    
    .showcase-images {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-6);
    }
    
    .showcase-images img {
      width: 100%;
      height: 350px;
      object-fit: cover;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
    }
    
    .heritage-cta .lead {
      margin-bottom: var(--space-6);
      max-width: 100%;
    }
    
    .showcase-figure {
      display: flex;
      flex-direction: column;
    }
    
    .showcase-figure figcaption {
      text-align: center;
      margin-top: var(--space-3);
      font-size: var(--text-sm);
      font-weight: var(--font-medium);
      color: var(--gold-dark);
      font-style: italic;
    }
    
    @media (max-width: 768px) {
      .page-hero {
        padding: 140px 0 60px;
      }
      
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .stat-number {
        font-size: var(--text-4xl);
      }
      
      .cta-card {
        padding: var(--space-12) var(--space-6);
      }
      
      .heritage-grid {
        grid-template-columns: 1fr;
      }
      
      .showcase-images {
        grid-template-columns: 1fr;
      }
      
      .showcase-images img {
        height: 250px;
      }
    }
  `;
  document.head.appendChild(styles);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectAboutStyles);
} else {
  injectAboutStyles();
}
