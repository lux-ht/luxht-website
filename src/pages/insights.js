/**
 * LUXHT Insights Page Scripts
 */

function injectInsightsStyles() {
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
    
    /* Featured Article */
    .featured-card {
      padding: var(--space-12);
      background: linear-gradient(135deg, var(--bg-white) 0%, var(--bg-ivory) 100%);
      border-left: 4px solid var(--gold-primary);
    }
    
    .featured-link {
      display: block;
      text-decoration: none;
    }
    
    .featured-content .article-category {
      display: inline-block;
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      letter-spacing: var(--tracking-widest);
      text-transform: uppercase;
      margin-bottom: var(--space-4);
    }
    
    .featured-content h2 {
      margin-bottom: var(--space-4);
      transition: color var(--duration-fast);
    }
    
    .featured-link:hover h2 {
      color: var(--gold-dark);
    }
    
    .featured-content p {
      color: var(--text-secondary);
      margin-bottom: var(--space-6);
      max-width: 700px;
    }
    
    .read-more {
      font-weight: var(--font-medium);
      color: var(--gold-dark);
      transition: all var(--duration-fast);
    }
    
    .featured-link:hover .read-more,
    .article-card:hover .read-more {
      letter-spacing: 0.05em;
    }
    
    /* Article Cards */
    .article-card {
      display: flex;
      flex-direction: column;
      padding: var(--space-8);
      text-decoration: none;
      transition: all var(--duration-normal) var(--ease-elegant);
    }
    
    .article-icon {
      font-size: var(--text-3xl);
      margin-bottom: var(--space-4);
    }
    
    .article-card .article-category {
      font-size: var(--text-xs);
      font-weight: var(--font-semibold);
      letter-spacing: var(--tracking-widest);
      text-transform: uppercase;
      color: var(--gold-dark);
      margin-bottom: var(--space-3);
    }
    
    .article-card h3 {
      font-size: var(--text-lg);
      margin-bottom: var(--space-3);
      transition: color var(--duration-fast);
    }
    
    .article-card:hover h3 {
      color: var(--gold-dark);
    }
    
    .article-card p {
      font-size: var(--text-sm);
      color: var(--text-muted);
      flex: 1;
      margin-bottom: var(--space-4);
    }
    
    .article-card .read-more {
      font-size: var(--text-sm);
    }
    
    /* Facts Section */
    .fact-card {
      text-align: center;
      padding: var(--space-6);
    }
    
    .fact-number {
      display: block;
      font-family: var(--font-display);
      font-size: var(--text-4xl);
      margin-bottom: var(--space-2);
    }
    
    .fact-card p {
      font-size: var(--text-sm);
      color: var(--text-muted);
    }
    
    /* CTA */
    .cta-card {
      padding: var(--space-16) var(--space-8);
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
      
      .featured-card {
        padding: var(--space-8);
      }
      
      .cta-card {
        padding: var(--space-12) var(--space-6);
      }
    }
  `;
    document.head.appendChild(styles);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectInsightsStyles);
} else {
    injectInsightsStyles();
}
