/**
 * LUXHT Luxury Footer Component
 * Premium footer with gold accents
 */

export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  const currentYear = new Date().getFullYear();

  footer.innerHTML = `
    <div class="footer-top">
      <div class="container">
        <div class="footer-grid">
          
          <!-- Brand Column -->
          <div class="footer-brand">
            <a href="/" class="footer-logo">
              <img src="/assets/logo.png" alt="LUXHT - Luxury Home Transformations" class="footer-logo-img">
            </a>
            <p class="footer-tagline">Transforming houses into luxury homes since 1985. Central Florida's premier destination for sophisticated home renovations.</p>
            <div class="footer-social">
              <a href="https://www.instagram.com/luxuryhometransformations/" class="social-link" aria-label="Instagram" target="_blank" rel="noopener">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/luxuryhometransformations" class="social-link" aria-label="Facebook" target="_blank" rel="noopener">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Quick Links -->
          <div class="footer-links-col">
            <h4 class="footer-heading">Navigation</h4>
            <ul class="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/pages/services.html">Services</a></li>
              <li><a href="/pages/projects.html">Portfolio</a></li>
              <li><a href="/pages/about-us.html">About Us</a></li>
              <li><a href="/pages/insights.html">Insights</a></li>
              <li><a href="/pages/careers.html">Careers</a></li>
            </ul>
          </div>
          
          <!-- Services -->
          <div class="footer-links-col">
            <h4 class="footer-heading">Services</h4>
            <ul class="footer-links">
              <li><a href="/pages/services.html">Kitchen Renovations</a></li>
              <li><a href="/pages/services.html">Bathroom Remodeling</a></li>
              <li><a href="/pages/services.html">Whole Home Design</a></li>
              <li><a href="/pages/services.html">Custom Builds</a></li>
              <li><a href="/pages/book-online.html">Consultations</a></li>
            </ul>
          </div>
          
          <!-- Contact -->
          <div class="footer-contact-col">
            <h4 class="footer-heading">Contact</h4>
            <div class="footer-contact-info">
              <div class="contact-item">
                <span class="contact-label">Address</span>
                <p>Orlando, Florida</p>
              </div>
              <div class="contact-item">
                <span class="contact-label">Phone</span>
                <a href="tel:4072880832">(407) 288-0832</a>
              </div>
              <div class="contact-item">
                <span class="contact-label">Email</span>
                <a href="mailto:info@luxht.com">info@luxht.com</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    
    <hr class="divider-gold">
    
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-inner">
          <p class="copyright">© ${currentYear} Luxury Home Transformations. All rights reserved.</p>
          <div class="footer-legal">
            <a href="/pages/privacy.html">Privacy Policy</a>
            <a href="/pages/terms.html">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  `;

  return footer;
}

// Inject footer styles
export function injectFooterStyles() {
  const styles = document.createElement('style');
  styles.textContent = `
    .footer {
      background: var(--bg-ivory);
      padding-top: var(--space-20);
    }
    
    .footer-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
      gap: var(--space-12);
    }
    
    /* Brand */
    .footer-brand {
      padding-right: var(--space-8);
    }
    
    .footer-logo {
      display: inline-block;
      margin-bottom: var(--space-4);
    }
    
    .footer-logo-img {
      height: 100px;
      width: auto;
      object-fit: contain;
    }
    
    .footer-tagline {
      font-size: var(--text-sm);
      color: var(--text-muted);
      line-height: var(--leading-relaxed);
      margin-bottom: var(--space-6);
    }
    
    .footer-social {
      display: flex;
      gap: var(--space-3);
    }
    
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: var(--radius-full);
      color: var(--text-secondary);
      transition: all var(--duration-normal) var(--ease-elegant);
    }
    
    .social-link:hover {
      border-color: var(--gold-primary);
      color: var(--gold-dark);
      background: rgba(212, 175, 55, 0.05);
    }
    
    /* Links Columns */
    .footer-heading {
      font-family: var(--font-body);
      font-size: var(--text-sm);
      font-weight: var(--font-semibold);
      letter-spacing: var(--tracking-wider);
      text-transform: uppercase;
      color: var(--text-primary);
      margin-bottom: var(--space-6);
    }
    
    .footer-links li {
      margin-bottom: var(--space-3);
    }
    
    .footer-links a {
      font-size: var(--text-sm);
      color: var(--text-muted);
      transition: color var(--duration-fast) var(--ease-elegant);
    }
    
    .footer-links a:hover {
      color: var(--gold-dark);
    }
    
    /* Contact */
    .footer-contact-info {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: var(--space-4) var(--space-8);
    }
    
    .contact-item {
      display: flex;
      align-items: center;
      gap: var(--space-3);
    }
    
    .contact-label {
      font-size: var(--text-xs);
      font-weight: var(--font-semibold);
      letter-spacing: var(--tracking-wider);
      text-transform: uppercase;
      color: var(--gold-dark);
      min-width: 80px;
    }
    
    .contact-item p,
    .contact-item a {
      font-size: var(--text-sm);
      color: var(--text-secondary);
      line-height: var(--leading-relaxed);
      margin: 0;
    }
    
    .contact-item a:hover {
      color: var(--gold-dark);
    }
    
    /* Bottom */
    .footer-bottom {
      padding: var(--space-6) 0;
    }
    
    .footer-bottom-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: var(--space-4);
    }
    
    .copyright {
      font-size: var(--text-sm);
      color: var(--text-muted);
    }
    
    .footer-legal {
      display: flex;
      gap: var(--space-6);
    }
    
    .footer-legal a {
      font-size: var(--text-sm);
      color: var(--text-muted);
    }
    
    .footer-legal a:hover {
      color: var(--gold-dark);
    }
    
    @media (max-width: 1024px) {
      .footer-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-10);
      }
      
      .footer-brand {
        grid-column: span 2;
      }
    }
    
    @media (max-width: 768px) {
      .footer {
        padding-top: var(--space-12);
      }
      
      .footer-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-8) var(--space-4);
      }
      
      .footer-brand {
        grid-column: span 2;
        text-align: left;
      }

      .footer-logo {
        margin-left: 0;
      }
      
      .footer-contact-col {
        grid-column: span 2;
      }

      .footer-contact-info {
        flex-direction: row;
        flex-wrap: wrap;
        gap: var(--space-6) var(--space-8);
      }
      
      .contact-item {
        min-width: fit-content;
      }
      
      .footer-bottom-inner {
        flex-direction: column;
        text-align: center;
      }
    }
  `;
  document.head.appendChild(styles);
}
