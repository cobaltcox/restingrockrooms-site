document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('js-navbar-toggle');
    const mainNav = document.getElementById('js-menu');

    // Toggle menu
    if (navbarToggle && mainNav) {
        navbarToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            console.log('Menu toggled'); // Helpful for debugging
        });

        // Add click event listeners to all nav links
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('active'); // Close menu when link is clicked
            });
        });
    } else {
        console.error('Navigation elements not found');
    }
});