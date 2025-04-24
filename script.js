// Section reveal on scroll
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Navbar toggle
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Replace the existing typing animation with Typed.js
const typed = new Typed('.typed-name', {
    strings: ['Ms. ASHWITHA C THOMAS'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navbar.classList.remove('active');
        }
    });
});