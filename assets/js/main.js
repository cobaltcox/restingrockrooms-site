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

    // Add fullscreen image functionality
    const modal = document.getElementById('fullscreen-modal');
    const modalImg = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.close-modal');
    const fullscreenBtns = document.querySelectorAll('.fullscreen-btn');

    fullscreenBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const img = this.previousElementSibling;
            modal.style.display = "block";
            modalImg.src = img.src;
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});