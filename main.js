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

        // Mobile dropdown toggles (Portfolio)
        const mobileDropdownParents = mobileNavOverlay.querySelectorAll('.has-dropdown > a');
        mobileDropdownParents.forEach(link => {
            const parent = link.parentElement;
            const dropdown = parent.querySelector('.dropdown');
            link.setAttribute('aria-expanded', 'false');

            link.addEventListener('click', (event) => {
                if (!dropdown) return;
                const isOpen = parent.classList.contains('open');
                if (!isOpen) {
                    event.preventDefault(); // first tap opens
                    parent.classList.add('open');
                    link.setAttribute('aria-expanded', 'true');
                } else {
                    // second tap navigates; collapse for consistency
                    parent.classList.remove('open');
                    link.setAttribute('aria-expanded', 'false');
                }
            });
        });

        const closeMenu = () => {
            mobileNavOverlay.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            menuToggle.innerHTML = '☰';
            mobileDropdownParents.forEach(link => {
                link.parentElement.classList.remove('open');
                link.setAttribute('aria-expanded', 'false');
            });
        };

        // Close menu when a link (except the dropdown toggler) is clicked
        mobileNavOverlay.querySelectorAll('a').forEach(link => {
            const isDropdownToggle = link.parentElement.classList.contains('has-dropdown');
            if (isDropdownToggle) return;

            link.addEventListener('click', () => {
                closeMenu();
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
