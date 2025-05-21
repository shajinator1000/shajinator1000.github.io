document.addEventListener("DOMContentLoaded", function () {
  // Hide loading spinner
  const loader = document.getElementById("loading");
  if (loader) loader.style.display = "none";

  // Form alert
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thanks for your message!");
    });
  }

  // Fade-in animation on scroll
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
});
