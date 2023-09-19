// script.js

// Function to smoothly scroll to a target element
function scrollToTarget(target) {
    window.scroll({
        top: target.offsetTop,
        behavior: 'smooth' // Smooth scroll behavior
    });
}

// Attach click event listeners to navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href').substring(1); // Remove the '#' character
        const target = document.getElementById(targetId);
        if (target) {
            scrollToTarget(target);
        }
    });
});
