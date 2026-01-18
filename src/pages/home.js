/**
 * LUXHT Home Page Scripts
 * Luxury aesthetic enhancements
 */

function injectHomeStyles() {
  const styles = document.createElement('style');
  styles.textContent = `
    /* Hero Section */
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 180px;
      overflow: hidden;
    }
    
    .hero-pattern {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
    
    .hero-content {
      max-width: 800px;
      margin: 0 auto var(--space-24);
      text-align: center;
    }
    
    .hero-content h1 {
      margin: var(--space-4) 0 var(--space-6);
    }
    
    .hero-content .lead {
      margin: 0 auto var(--space-10);
      max-width: 600px;
    }
    
    .hero-cta {
      display: flex;
      gap: var(--space-4);
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .hero-stats {
      background: var(--bg-white);
      padding: var(--space-10) 0;
      border-top: 1px solid rgba(212, 175, 55, 0.1);
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
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
    
    /* Services */
    .service-icon {
      font-size: var(--text-2xl);
      color: var(--gold-primary);
      margin-bottom: var(--space-4);
    }
    
    .services-grid .luxury-card {
      text-align: center;
      padding: var(--space-10);
    }
    
    .services-grid h4 {
      margin-bottom: var(--space-3);
    }
    
    .services-grid p {
      font-size: var(--text-sm);
      color: var(--text-muted);
      max-width: none;
    }
    
    /* Portfolio */
    .portfolio-item {
      position: relative;
      height: 400px;
      border-radius: var(--radius-lg);
      overflow: hidden;
    }
    
    .portfolio-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .portfolio-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: var(--space-6);
      background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
      color: white;
    }
    
    .portfolio-category {
      font-size: var(--text-xs);
      font-weight: var(--font-semibold);
      letter-spacing: var(--tracking-widest);
      text-transform: uppercase;
      color: var(--gold-light);
      margin-bottom: var(--space-1);
      display: block;
    }
    
    .portfolio-overlay h4 {
      color: white;
      font-size: var(--text-xl);
    }
    
    /* Testimonial */
    .testimonial-card {
      text-align: center;
      padding: var(--space-16) var(--space-8);
    }
    
    .quote-mark {
      font-family: var(--font-display);
      font-size: 120px;
      line-height: 0.5;
      margin-bottom: var(--space-6);
    }
    
    .testimonial-card blockquote {
      font-size: var(--text-2xl);
      line-height: var(--leading-relaxed);
      color: var(--text-primary);
      max-width: 700px;
      margin: 0 auto var(--space-8);
    }
    
    .testimonial-author {
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
    }
    
    .author-name {
      font-weight: var(--font-semibold);
      color: var(--text-primary);
    }
    
    .author-location {
      font-size: var(--text-sm);
      color: var(--text-muted);
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
    
    /* Featured Property Gallery */
    .featured-property {
      background: var(--bg-white);
    }
    
    .featured-hook {
      margin: var(--space-8) 0 var(--space-12);
    }
    
    .featured-hook .accent-text {
      font-family: var(--font-display);
      font-size: var(--text-xl);
      font-style: italic;
      color: var(--text-secondary);
      max-width: 700px;
      margin: 0 auto;
    }
    
    .property-gallery {
      margin-bottom: var(--space-12);
    }
    
    .gallery-hero {
      margin-bottom: var(--space-6);
    }
    
    .gallery-main-image {
      width: 100%;
      max-width: 1024px;
      height: auto;
      max-height: 450px;
      object-fit: cover;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-xl);
      margin: 0 auto;
      display: block;
      image-rendering: -webkit-optimize-contrast;
    }
    
    .gallery-hero-wrapper {
      position: relative;
      max-width: 1024px;
      margin: 0 auto;
      border-radius: var(--radius-lg);
      overflow: hidden;
    }
    
    .gallery-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }
    
    .just-listed-badge {
      background: rgba(255, 255, 255, 0.95);
      color: var(--gold-dark);
      font-family: var(--font-display);
      font-size: var(--text-2xl);
      font-weight: var(--font-medium);
      letter-spacing: var(--tracking-widest);
      text-transform: uppercase;
      padding: var(--space-4) var(--space-10);
      border: 2px solid var(--gold-primary);
      box-shadow: 0 4px 30px rgba(0,0,0,0.15);
      animation: badgePulse 3s ease-in-out infinite;
    }
    
    @keyframes badgePulse {
      0%, 100% { 
        transform: scale(1);
        box-shadow: 0 4px 30px rgba(212, 175, 55, 0.2);
      }
      50% { 
        transform: scale(1.02);
        box-shadow: 0 6px 40px rgba(212, 175, 55, 0.4);
      }
    }
    
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: var(--space-3);
    }
    
    .gallery-item {
      position: relative;
      aspect-ratio: 1;
      border-radius: var(--radius-md);
      overflow: hidden;
      cursor: pointer;
      box-shadow: var(--shadow-md);
      transition: all var(--transition-smooth);
    }
    
    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-smooth);
    }
    
    .gallery-item:hover {
      box-shadow: var(--shadow-xl);
      z-index: 10;
    }
    
    .gallery-item:hover img {
      transform: scale(1.1);
    }
    
    .property-cta {
      padding-top: var(--space-8);
      border-top: 1px solid rgba(212, 175, 55, 0.2);
    }
    
    .property-cta .lead {
      margin-bottom: var(--space-6);
      text-align: center;
      max-width: 100%;
      width: 100%;
    }
    
    /* Property Specs */
    .property-specs {
      display: flex;
      justify-content: center;
      gap: var(--space-12);
      margin-bottom: var(--space-12);
      padding: var(--space-8);
      background: var(--bg-ivory);
      border-radius: var(--radius-lg);
    }
    
    .spec-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-1);
    }
    
    .spec-divider {
      color: var(--gold-primary);
      font-size: var(--text-2xl);
      font-weight: var(--font-light);
      opacity: 0.5;
    }
    
    .spec-value {
      font-family: var(--font-display);
      font-size: var(--text-2xl);
      font-weight: var(--font-semibold);
      color: var(--text-primary);
    }
    
    .spec-label {
      font-size: var(--text-xs);
      font-weight: var(--font-medium);
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: var(--tracking-wider);
    }
    
    /* Lightbox */
    .lightbox {
      display: none;
      position: fixed;
      z-index: 9999;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.95);
      cursor: pointer;
      animation: fadeIn 0.3s ease;
    }
    
    .lightbox.active {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .lightbox-close {
      position: absolute;
      top: 20px;
      right: 40px;
      font-size: 50px;
      color: white;
      cursor: pointer;
      transition: color 0.3s ease;
    }
    
    .lightbox-close:hover {
      color: var(--gold-primary);
    }
    
    .lightbox-content {
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
      border-radius: var(--radius-md);
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
      animation: zoomIn 0.3s ease;
    }
    
    @keyframes zoomIn {
      from { transform: scale(0.8); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .hero {
        min-height: auto;
        padding-top: 140px;
        padding-bottom: var(--space-8);
      }
      
      .hero-content {
        text-align: center;
        margin-top: var(--space-4);
        margin-bottom: var(--space-12);
      }
      
      .hero-cta {
        justify-content: center;
      }
      
      .stats-grid {
        grid-template-columns: 1fr;
        gap: var(--space-6);
      }
      
      .stat-number {
        font-size: var(--text-4xl);
      }
      
      .portfolio-item {
        height: 300px;
      }
      
      .quote-mark {
        font-size: 80px;
      }
      
      .testimonial-card blockquote {
        font-size: var(--text-xl);
      }
      
      .cta-card {
        padding: var(--space-12) var(--space-6);
      }
      
      .gallery-main-image {
        height: 280px;
      }
      
      .gallery-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-2);
      }
      
      .featured-hook .accent-text {
        font-size: var(--text-lg);
      }
      
      .property-specs {
        gap: var(--space-6);
        padding: var(--space-6);
        flex-wrap: wrap;
      }
      
      .spec-value {
        font-size: var(--text-xl);
      }
    }
  `;
  document.head.appendChild(styles);
}

// Lightbox Functions
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (lightbox && lightboxImg) {
    lightboxImg.src = src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close lightbox on ESC key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

// Make functions globally available
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectHomeStyles);
} else {
  injectHomeStyles();
}
