// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Dark Mode Toggle
    const toggleSwitch = document.getElementById('darkModeToggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
    });

    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Form Validation
    const forms = document.querySelectorAll('form');

    forms.forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    // Lazy Loading Images
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('.lazyload');
        const imageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazyload');
                    img.classList.add('lazyloaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(function (img) {
            imageObserver.observe(img);
        });
    }

    // Smooth Scroll for Anchor Links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const target = document.querySelector(this.hash);
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
