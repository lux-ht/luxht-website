/**
 * LUXHT Luxury Website - Main Entry
 * Initializes all global components and animations
 */

import { createHeader, initHeader, injectHeaderStyles } from './components/header.js';
import { createFooter, injectFooterStyles } from './components/footer.js';

// Initialize the application
function init() {
    // Inject global styles
    injectHeaderStyles();
    injectFooterStyles();

    // Create header
    const header = createHeader();
    document.body.insertBefore(header, document.body.firstChild);

    // Create footer
    const footer = createFooter();
    document.body.appendChild(footer);

    // Initialize header behaviors
    initHeader();

    // Initialize scroll reveals
    initScrollReveal();

    // Add smooth page load transition
    document.body.classList.add('is-loaded');
}

// Scroll reveal animation observer
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger');

    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));

    // Immediately check for elements already in viewport on page load
    // This fixes the issue where content doesn't appear until scroll/interaction
    requestAnimationFrame(() => {
        reveals.forEach(el => {
            const rect = el.getBoundingClientRect();
            const inViewport = rect.top < window.innerHeight && rect.bottom >= 0;
            if (inViewport) {
                el.classList.add('is-visible');
            }
        });
    });
}

// Body loaded class for transitions
document.addEventListener('DOMContentLoaded', init);

// Smooth scroll-to-top for nav clicks to same page
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href="/"]');
    if (link && window.location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});
