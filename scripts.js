// scripts.js

// Dark Mode Toggle
const toggleButton = document.querySelector('.dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Set active link based on current page
const navLinks = document.querySelectorAll('nav ul li a');
const currentPage = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
