document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('js-navbar-toggle');
    const mainNav = document.getElementById('js-menu');
    const navbarLogo = document.querySelector('.navbar-logo');

    // Toggle menu
    if (navbarToggle && mainNav) {
        navbarToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            if (mainNav.classList.contains('active')) {
                navbarLogo.style.visibility = 'hidden';
                navbarToggle.style.visibility = 'hidden';
            } else {
                navbarLogo.style.visibility = 'visible';
                navbarToggle.style.visibility = 'visible';
            }
            console.log('Menu toggled'); // Helpful for debugging
        });

        // Add click event listeners to all nav links
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('active'); // Close menu when link is clicked
                navbarLogo.style.visibility = 'visible';
                navbarToggle.style.visibility = 'visible';
            });
        });
    } else {
        console.error('Navigation elements not found');
    }

    // Show logo on navbar when scrolled past header
    const header = document.querySelector('header');
    const navbarLogoImg = navbarLogo.querySelector('img');

    // Initially hide the navbar logo
    navbarLogoImg.style.opacity = 0;
    navbarLogoImg.style.transition = '0.3s';

    window.addEventListener('scroll', function() {
        if (window.scrollY > header.offsetHeight) {
            navbarLogoImg.style.opacity = 1;
        } else {
            navbarLogoImg.style.opacity = 0;
        }
    });
});