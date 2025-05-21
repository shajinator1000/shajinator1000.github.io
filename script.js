document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thanks for your message!");
    });
  }

  const fadeEls = document.querySelectorAll(".fade-in");
  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.9;
    fadeEls.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  const toggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");
  if (toggle && navMenu) {
    toggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

  if (window.Typed) {
    new Typed('#typed-text', {
      strings: ['Welcome to OmniExams', 'Master A-Level Chemistry', 'Smash Your Exams with AI'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });
  }
});
