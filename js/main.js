/**
 * LÓGICA DE INTERACTIVIDAD Y ANIMACIÓN - BITÁCORA CMTC 2026
 * Desarrollado bajo estándares modernos Vanilla JS (ES6+).
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Control del Botón de Alerta / Cierre de Bitácora ---
    const botonAlerta = document.getElementById('btnAlerta');
    
    if (botonAlerta) {
        botonAlerta.addEventListener('click', () => {
            alert('¡Gracias por revisar la Bitácora de la Batalla de Talentos CMTC 2026!');
        });
    }

    // --- 2. Sistema Avanzado de Animación al Hacer Scroll (Reveal System) ---
    const elementosReveal = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const opcionesObserver = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const callbackReveal = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(callbackReveal, opcionesObserver);
        
        elementosReveal.forEach(elemento => {
            observer.observe(elemento);
        });

    } else {
        elementosReveal.forEach(elemento => {
            elemento.classList.add('active');
        });
    }

    // --- 3. Cambio de Comportamiento de la Navbar al hacer Scroll ---
    const navbar = document.querySelector('.custom-navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.padding = '0.6rem 0';
                navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.35)';
                navbar.style.background = 'rgba(15, 23, 42, 0.96) !important';
            } else {
                navbar.style.padding = '1rem 0';
                navbar.style.boxShadow = 'none';
                navbar.style.background = 'rgba(15, 23, 42, 0.85) !important';
            }
        });
    }

    // --- 4. Ocultar tarjetas de galería cuya imagen no carga (evita huecos)
    const galleryImages = document.querySelectorAll('.gallery-img-card img');
    galleryImages.forEach(img => {
        img.addEventListener('error', () => {
            const card = img.closest('.gallery-img-card');
            if (card) card.style.display = 'none';
        });
        // Si la imagen ya está cargada y con naturalWidth 0, ocultar también
        if (img.complete && img.naturalWidth === 0) {
            const card = img.closest('.gallery-img-card');
            if (card) card.style.display = 'none';
        }
    });
});