document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    
    if (menuToggle && mobileNavOverlay) {
        menuToggle.addEventListener('click', () => {
            const isOpen = mobileNavOverlay.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
            if(isOpen){
                 menuToggle.innerHTML = '✖';
            }else{
                menuToggle.innerHTML = '☰';
            }
        });

        // Close menu when a link is clicked
        mobileNavOverlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNavOverlay.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                menuToggle.innerHTML = '☰';
            });
        });
    }

    // Scroll-triggered Animations
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!motionQuery.matches) {
        const revealElements = document.querySelectorAll('.reveal-on-scroll');
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }
});