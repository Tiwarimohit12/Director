document.addEventListener("DOMContentLoaded", () => {

    // ------------------------------------
    //  Animation 1: Fade-in on Scroll
    // ------------------------------------
    const scrollAnimate = document.querySelectorAll('.scroll-animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    scrollAnimate.forEach(element => {
        observer.observe(element);
    });

    // ------------------------------------
    //  Animation 2: Active Nav Highlighting
    // ------------------------------------
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Remove active class from all
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Add active class to the one matching the visible section
                const activeLink = document.querySelector(`nav a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, {
        rootMargin: '-50% 0px -50% 0px' // Activates when section is in the middle 50% of the screen
    });

    sections.forEach(section => {
        navObserver.observe(section);
    });

});