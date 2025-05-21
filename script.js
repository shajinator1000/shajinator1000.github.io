document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded");

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thanks for joining the OmniExams waitlist!");
    });
  }

  const images = document.querySelectorAll(".image-gallery img");
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;
    images.forEach(img => {
      const boxTop = img.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        img.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
