/**
 * Success Modal Utility for LUXHT
 * Replaces default browser alerts with a premium stylized modal.
 */

export function showSuccessModal(title, message, onCloseCallback) {
    // Check if modal already exists
    let overlay = document.getElementById('luxht-success-modal');

    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'luxht-success-modal';
        Object.assign(overlay.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '10000',
            opacity: '0',
            transition: 'opacity 0.3s ease'
        });

        const modal = document.createElement('div');
        Object.assign(modal.style, {
            backgroundColor: '#ffffff',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            maxWidth: '500px',
            width: '90%',
            textAlign: 'center',
            transform: 'scale(0.9)',
            transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
        });

        // Icon
        const iconDiv = document.createElement('div');
        iconDiv.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1a1a1a" class="w-16 h-16" style="width: 64px; height: 64px; margin: 0 auto 20px auto;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        `;

        // Title
        const titleEl = document.createElement('h3');
        titleEl.textContent = title;
        Object.assign(titleEl.style, {
            fontSize: '24px',
            fontWeight: '600',
            color: '#1a1a1a',
            marginBottom: '10px',
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
        });

        // Message
        const msgEl = document.createElement('p');
        msgEl.textContent = message;
        Object.assign(msgEl.style, {
            fontSize: '16px',
            color: '#555555',
            lineHeight: '1.5',
            marginBottom: '30px'
        });

        // Button
        const btn = document.createElement('button');
        btn.textContent = 'Close';
        Object.assign(btn.style, {
            backgroundColor: '#1a1a1a',
            color: '#ffffff',
            border: 'none',
            padding: '12px 30px',
            fontSize: '16px',
            fontWeight: '500',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
        });

        btn.onmouseover = () => btn.style.backgroundColor = '#333333';
        btn.onmouseout = () => btn.style.backgroundColor = '#1a1a1a';

        btn.onclick = () => {
            closeModal();
            if (onCloseCallback) onCloseCallback();
        };

        modal.appendChild(iconDiv);
        modal.appendChild(titleEl);
        modal.appendChild(msgEl);
        modal.appendChild(btn);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
    } else {
        // Update content if existing (edge case)
        const modal = overlay.firstChild;
        modal.children[1].textContent = title;
        modal.children[2].textContent = message;
        const btn = modal.children[3];
        btn.onclick = () => {
            closeModal();
            if (onCloseCallback) onCloseCallback();
        };
    }

    // Animate In
    // Force reflow
    overlay.offsetHeight;
    overlay.style.opacity = '1';
    overlay.firstChild.style.transform = 'scale(1)';

    function closeModal() {
        overlay.style.opacity = '0';
        overlay.firstChild.style.transform = 'scale(0.9)';
        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.parentNode.removeChild(overlay);
            }
        }, 300);
    }
}
