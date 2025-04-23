// Function to add 'visible' class when a section enters the viewport
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85; // When the section top is 85% of the window height
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// JavaScript for toggling the navbar
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active"); // Toggle the active class to show/hide the menu
});

// Typing animation for name
const text = "Ms. ASHWITHA C THOMAS";
const typedName = document.querySelector(".typed-name");

let index = 0;
let isDeleting = false;

function typeWriterLoop() {
  if (!isDeleting) {
    typedName.textContent = text.substring(0, index + 1);
    index++;
    if (index === text.length) {
      setTimeout(() => {
        isDeleting = true;
        typeWriterLoop();
      }, 1500); // Pause before deleting
      return;
    }
  } else {
    typedName.textContent = text.substring(0, index - 1);
    index--;
    if (index === 0) {
      isDeleting = false;
    }
  }

  const speed = isDeleting ? 50 : 100;
  setTimeout(typeWriterLoop, speed);
}

window.addEventListener("load", () => {
  typeWriterLoop();
});