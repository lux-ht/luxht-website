(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(a){if(a.ep)return;a.ep=!0;const t=r(a);fetch(a.href,t)}})();function l(){const e=document.createElement("header");return e.className="header",e.id="header",e.innerHTML=`
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
            <li><a href="/pages/services" class="nav-link">Services</a></li>
            <li><a href="/pages/quick-cash" class="nav-link">We Buy</a></li>
            <li><a href="/pages/projects" class="nav-link">Portfolio</a></li>
            <li><a href="/pages/insights" class="nav-link">Insights</a></li>
            <li><a href="/pages/about-us" class="nav-link">About</a></li>
            <li><a href="/pages/contact" class="nav-link">Contact</a></li>
          </ul>
          
          <!-- CTA Buttons -->
          <div class="nav-cta hide-mobile">
            <a href="tel:4077207476" class="nav-phone" title="Call (407) 720-7476">
              <span class="phone-icon">✆</span>
            </a>
            <a href="/pages/book-online" class="btn-gold">Request Consultation</a>
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
          <li><a href="/pages/services" class="mobile-nav-link">Services</a></li>
          <li><a href="/pages/quick-cash" class="mobile-nav-link">We Buy</a></li>
          <li><a href="/pages/projects" class="mobile-nav-link">Portfolio</a></li>
          <li><a href="/pages/insights" class="mobile-nav-link">Insights</a></li>
          <li><a href="/pages/about-us" class="mobile-nav-link">About</a></li>
          <li><a href="/pages/careers" class="mobile-nav-link">Careers</a></li>
          <li><a href="/pages/contact" class="mobile-nav-link">Contact</a></li>
        </ul>
        <div class="mobile-cta">
          <a href="tel:4077207476" class="mobile-phone">(407) 720-7476</a>
          <a href="/pages/book-online" class="btn-gold">Request Consultation</a>
        </div>
      </div>
    </div>
  `,e}function s(){const e=document.querySelector(".mobile-toggle"),o=document.getElementById("mobile-menu"),r=document.getElementById("header");e&&o&&(e.addEventListener("click",()=>{const a=o.classList.toggle("is-open");e.classList.toggle("is-active",a),e.setAttribute("aria-expanded",a),document.body.style.overflow=a?"hidden":""}),o.querySelectorAll("a").forEach(a=>{a.addEventListener("click",()=>{o.classList.remove("is-open"),e.classList.remove("is-active"),e.setAttribute("aria-expanded","false"),document.body.style.overflow=""})})),window.addEventListener("scroll",()=>{window.scrollY>100?r.classList.add("is-scrolled"):r.classList.remove("is-scrolled")});const i=window.location.pathname;document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(a=>{const t=a.getAttribute("href");(t===i||i!=="/"&&t!=="/"&&i.endsWith(t)||i==="/"&&t==="/")&&a.classList.add("is-active")})}function c(){const e=document.createElement("style");e.textContent=`
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
      height: 2px;
      background: var(--gold-primary);
      transition: width var(--duration-normal) var(--ease-elegant);
    }
    
    .nav-link:hover {
      color: var(--gold-dark);
    }

    .nav-link.is-active {
      color: var(--gold-primary);
      font-weight: var(--font-semibold);
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
  `,document.head.appendChild(e)}function d(){const e=document.createElement("footer");e.className="footer";const o=new Date().getFullYear();return e.innerHTML=`
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
              <li><a href="/pages/services">Services</a></li>
              <li><a href="/pages/projects">Portfolio</a></li>
              <li><a href="/pages/about-us">About Us</a></li>
              <li><a href="/pages/insights">Insights</a></li>
              <li><a href="/pages/careers">Careers</a></li>
            </ul>
          </div>
          
          <!-- Services -->
          <div class="footer-links-col">
            <h4 class="footer-heading">Services</h4>
            <ul class="footer-links">
              <li><a href="/pages/services">Kitchen Renovations</a></li>
              <li><a href="/pages/services">Bathroom Remodeling</a></li>
              <li><a href="/pages/services">Whole Home Design</a></li>
              <li><a href="/pages/services">Custom Builds</a></li>
              <li><a href="/pages/book-online">Consultations</a></li>
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
                <a href="tel:4077207476">(407) 720-7476</a>
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
          <p class="copyright">© ${o} LUXHT — Luxury Home Transformations. All rights reserved.</p>
          <div class="footer-legal">
            <a href="/pages/privacy">Privacy Policy</a>
            <a href="/pages/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  `,e}function g(){const e=document.createElement("style");e.textContent=`
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
  `,document.head.appendChild(e)}function v(){c(),g();const e=l();document.body.insertBefore(e,document.body.firstChild);const o=d();document.body.appendChild(o),s(),p(),document.body.classList.add("is-loaded")}function p(){const e=document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger");if(!e.length)return;const o=new IntersectionObserver(r=>{r.forEach(i=>{i.isIntersecting&&i.target.classList.add("is-visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});e.forEach(r=>o.observe(r)),requestAnimationFrame(()=>{e.forEach(r=>{const i=r.getBoundingClientRect();i.top<window.innerHeight&&i.bottom>=0&&r.classList.add("is-visible")})})}document.addEventListener("DOMContentLoaded",v);document.addEventListener("click",e=>{e.target.closest('a[href="/"]')&&window.location.pathname==="/"&&(e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))});
