/**
 * LUXHT Article Page Scripts
 */

function injectArticleStyles() {
    const styles = document.createElement('style');
    styles.textContent = `
    /* Article Hero */
    .article-hero {
      padding: 160px 0 60px;
    }
    
    .article-header {
      text-align: center;
    }
    
    .back-link {
      display: inline-block;
      font-size: var(--text-sm);
      color: var(--text-muted);
      margin-bottom: var(--space-6);
      transition: color var(--duration-fast);
    }
    
    .back-link:hover {
      color: var(--gold-dark);
    }
    
    .article-header .article-category {
      display: block;
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      letter-spacing: var(--tracking-widest);
      text-transform: uppercase;
      margin-bottom: var(--space-4);
    }
    
    .article-header h1 {
      font-size: var(--text-4xl);
      margin-bottom: var(--space-4);
    }
    
    .article-meta {
      font-size: var(--text-sm);
      color: var(--text-muted);
    }
    
    /* Article Body */
    .article-body {
      font-size: var(--text-lg);
      line-height: 1.8;
    }
    
    .article-body .lead {
      font-size: var(--text-xl);
      color: var(--text-secondary);
      margin-bottom: var(--space-10);
      line-height: 1.7;
    }
    
    .article-body h2 {
      font-size: var(--text-2xl);
      margin-top: var(--space-12);
      margin-bottom: var(--space-4);
      color: var(--text-primary);
    }
    
    .article-body h3 {
      font-size: var(--text-xl);
      margin-top: var(--space-8);
      margin-bottom: var(--space-3);
    }
    
    .article-body p {
      margin-bottom: var(--space-6);
      color: var(--text-secondary);
    }
    
    .article-body ul,
    .article-body ol {
      margin-bottom: var(--space-6);
      padding-left: var(--space-6);
    }
    
    .article-body li {
      margin-bottom: var(--space-3);
      color: var(--text-secondary);
    }
    
    .article-body strong {
      color: var(--text-primary);
    }
    
    /* Callout Box */
    .article-callout {
      background: var(--bg-ivory);
      border-left: 4px solid var(--gold-primary);
      padding: var(--space-8);
      margin: var(--space-10) 0;
      border-radius: var(--radius-md);
    }
    
    .article-callout h3 {
      margin-top: 0;
      margin-bottom: var(--space-3);
      color: var(--gold-dark);
    }
    
    .article-callout p {
      margin-bottom: 0;
    }
    
    /* Article CTA */
    .article-cta {
      text-align: center;
      padding: var(--space-10);
      margin: var(--space-12) 0;
    }
    
    .article-cta h3 {
      margin-bottom: var(--space-3);
    }
    
    .article-cta p {
      margin-bottom: var(--space-6);
      color: var(--text-secondary);
    }
    
    /* Related Articles */
    .related-articles {
      margin-top: var(--space-12);
      padding-top: var(--space-8);
      border-top: 1px solid rgba(0,0,0,0.1);
    }
    
    .related-articles h3 {
      margin-bottom: var(--space-6);
    }
    
    .related-grid {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    }
    
    .related-link {
      color: var(--gold-dark);
      font-weight: var(--font-medium);
      transition: letter-spacing var(--duration-fast);
    }
    
    .related-link:hover {
      letter-spacing: 0.02em;
    }
    
    @media (max-width: 768px) {
      .article-hero {
        padding: 140px 0 40px;
      }
      
      .article-header h1 {
        font-size: var(--text-3xl);
      }
      
      .article-body {
        font-size: var(--text-base);
      }
      
      .article-body .lead {
        font-size: var(--text-lg);
      }
    }
  `;
    document.head.appendChild(styles);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectArticleStyles);
} else {
    injectArticleStyles();
}
