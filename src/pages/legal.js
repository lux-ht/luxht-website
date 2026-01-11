/**
 * LUXHT Legal Pages Scripts (Privacy, Terms)
 */

function injectLegalStyles() {
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
    
    .legal-text {
      font-size: var(--text-base);
      line-height: var(--leading-relaxed);
    }
    
    .legal-text h2 {
      font-size: var(--text-xl);
      margin-top: var(--space-10);
      margin-bottom: var(--space-4);
      color: var(--text-primary);
    }
    
    .legal-text h2:first-of-type {
      margin-top: 0;
    }
    
    .legal-text p {
      margin-bottom: var(--space-4);
      color: var(--text-secondary);
    }
    
    .legal-text ul {
      margin-bottom: var(--space-4);
      padding-left: var(--space-6);
    }
    
    .legal-text li {
      margin-bottom: var(--space-2);
      color: var(--text-secondary);
    }
    
    .legal-text a {
      color: var(--gold-dark);
    }
    
    .legal-text a:hover {
      text-decoration: underline;
    }
    
    .last-updated {
      color: var(--text-muted);
      margin-bottom: var(--space-8);
    }
    
    @media (max-width: 768px) {
      .page-hero {
        padding: 140px 0 60px;
      }
    }
  `;
    document.head.appendChild(styles);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectLegalStyles);
} else {
    injectLegalStyles();
}
