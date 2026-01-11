/**
 * LUXHT Luxury Header Component
 * Elegant navigation with gold accents
 */

export function createHeader() {
  const header = document.createElement('header');
  header.className = 'header';
  header.id = 'header';

  header.innerHTML = `
    <div class="header-inner">
      <div class="container">
        <nav class="nav">
          <!-- Logo -->
          <a href="/" class="logo">
            <img src="/assets/logo.png" alt="LUXHT - Luxury Home Transformations" class="logo-img">
          </a>
          
          <!-- Desktop Navigation -->
          <ul class="nav-links hide-mobile">
            <li><a href="/" class="nav-link">Home</a></li>
            <li><a href="/pages/services.html" class="nav-link">Services</a></li>
            <li><a href="/pages/quick-cash.html" class="nav-link">We Buy</a></li>
            <li><a href="/pages/projects.html" class="nav-link">Portfolio</a></li>
            <li><a href="/pages/insights.html" class="nav-link">Insights</a></li>
            <li><a href="/pages/about-us.html" class="nav-link">About</a></li>
            <li><a href="/pages/contact.html" class="nav-link">Contact</a></li>
          </ul>
          
          <!-- CTA Buttons -->
          <div class="nav-cta hide-mobile">
            <a href="tel:4072880832" class="nav-phone" title="Call (407) 288-0832">
              <span class="phone-icon">✆</span>
            </a>
            <a href="/pages/book-online.html" class="btn-gold">Schedule Consultation</a>
          </div>
          
          <!-- Mobile Menu Toggle -->
          <button class="mobile-toggle" aria-label="Toggle menu" aria-expanded="false">
            <span class="toggle-line"></span>
            <span class="toggle-line"></span>
            <span class="toggle-line"></span>
          </button>
        </nav>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobile-menu">
      <div class="mobile-menu-inner">
        <ul class="mobile-nav-links">
          <li><a href="/" class="mobile-nav-link">Home</a></li>
          <li><a href="/pages/services.html" class="mobile-nav-link">Services</a></li>
          <li><a href="/pages/quick-cash.html" class="mobile-nav-link">We Buy</a></li>
          <li><a href="/pages/projects.html" class="mobile-nav-link">Portfolio</a></li>
          <li><a href="/pages/insights.html" class="mobile-nav-link">Insights</a></li>
          <li><a href="/pages/about-us.html" class="mobile-nav-link">About</a></li>
          <li><a href="/pages/careers.html" class="mobile-nav-link">Careers</a></li>
          <li><a href="/pages/contact.html" class="mobile-nav-link">Contact</a></li>
        </ul>
        <div class="mobile-cta">
          <a href="tel:4072880832" class="mobile-phone">(407) 288-0832</a>
          <a href="/pages/book-online.html" class="btn-gold">Schedule Consultation</a>
        </div>
      </div>
    </div>
  `;

  return header;
}

export function initHeader() {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  const header = document.getElementById('header');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      toggle.classList.toggle('is-active', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu on link click
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('is-open');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Header scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 100) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }

    lastScroll = currentScroll;
  });

  // Set active link
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '/' && href === '/')) {
      link.classList.add('is-active');
    }
  });
}

// Inject header styles
export function injectHeaderStyles() {
  const styles = document.createElement('style');
  styles.textContent = `
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: var(--z-sticky);
      transition: all var(--duration-slow) var(--ease-elegant);
    }
    
    .header-inner {
      background: rgba(255, 255, 255, 0.98);
      border-bottom: 1px solid rgba(212, 175, 55, 0.1);
      transition: all var(--duration-slow) var(--ease-elegant);
    }
    
    .header.is-scrolled .header-inner {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
    }
    
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 120px;
    }
    
    /* Logo */
    .logo {
      display: flex;
      align-items: center;
    }
    
    .logo-img {
      height: 110px;
      width: auto;
      object-fit: contain;
    }
    
    .logo-text {
      font-family: var(--font-display);
      font-size: var(--text-2xl);
      font-weight: var(--font-bold);
      color: var(--text-primary);
      letter-spacing: var(--tracking-wide);
    }
    
    .logo-accent {
      color: var(--gold-primary);
    }
    
    .logo-tagline {
      font-family: var(--font-body);
      font-size: var(--text-xs);
      color: var(--text-muted);
      letter-spacing: var(--tracking-wider);
      text-transform: uppercase;
      margin-top: -2px;
    }
    
    /* Nav Links */
    .nav-links {
      display: flex;
      gap: var(--space-8);
    }
    
    .nav-link {
      font-family: var(--font-body);
      font-size: var(--text-sm);
      font-weight: var(--font-medium);
      letter-spacing: var(--tracking-wide);
      text-transform: uppercase;
      color: var(--text-secondary);
      padding: var(--space-2) 0;
      position: relative;
      transition: color var(--duration-normal) var(--ease-elegant);
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--gold-primary);
      transition: width var(--duration-normal) var(--ease-elegant);
    }
    
    .nav-link:hover,
    .nav-link.is-active {
      color: var(--gold-dark);
    }
    
    .nav-link:hover::after,
    .nav-link.is-active::after {
      width: 100%;
    }
    
    /* CTA */
    .nav-cta {
      display: flex;
      align-items: center;
      gap: var(--space-6);
    }
    
    .nav-cta .btn-gold {
      padding: var(--space-2) var(--space-5);
      font-size: var(--text-xs);
    }
    
    .nav-phone {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      font-size: var(--text-sm);
      font-weight: var(--font-medium);
      color: var(--text-secondary);
    }
    
    .nav-phone:hover {
      color: var(--gold-dark);
    }
    
    .phone-icon {
      font-size: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    /* Mobile Toggle */
    .mobile-toggle {
      display: none;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      width: 30px;
      height: 30px;
      padding: 0;
      background: none;
      border: none;
      cursor: pointer;
    }
    
    .toggle-line {
      display: block;
      width: 100%;
      height: 2px;
      background: var(--text-primary);
      transition: all var(--duration-normal) var(--ease-elegant);
    }
    
    .mobile-toggle.is-active .toggle-line:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }
    
    .mobile-toggle.is-active .toggle-line:nth-child(2) {
      opacity: 0;
    }
    
    .mobile-toggle.is-active .toggle-line:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
    
    /* Mobile Menu */
    .mobile-menu {
      position: fixed;
      top: 120px;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--bg-white);
      opacity: 0;
      visibility: hidden;
      transform: translateY(-20px);
      transition: all var(--duration-slow) var(--ease-elegant);
      z-index: var(--z-overlay);
    }
    
    .mobile-menu.is-open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    
    .mobile-menu-inner {
      padding: var(--space-10) var(--space-6);
      display: flex;
      flex-direction: column;
      gap: var(--space-10);
    }
    
    .mobile-nav-links {
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
    }
    
    .mobile-nav-link {
      font-family: var(--font-display);
      font-size: var(--text-2xl);
      color: var(--text-primary);
      padding: var(--space-3) 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      transition: color var(--duration-normal) var(--ease-elegant);
    }
    
    .mobile-nav-link:hover,
    .mobile-nav-link.is-active {
      color: var(--gold-dark);
    }
    
    .mobile-cta {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      text-align: center;
    }
    
    .mobile-phone {
      font-size: var(--text-lg);
      font-weight: var(--font-medium);
      color: var(--text-primary);
    }
    
    @media (max-width: 1024px) {
      .nav-links {
        gap: var(--space-5);
      }
    }
    
    @media (max-width: 768px) {
      .nav {
        height: 100px;
      }
      
      .logo-img {
        height: 80px;
      }
      
      .mobile-toggle {
        display: flex;
      }
      
      .hide-mobile {
        display: none !important;
      }
      
      .mobile-menu {
        top: 100px;
      }
    }
  `;
  document.head.appendChild(styles);
}
