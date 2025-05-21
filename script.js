document.addEventListener("DOMContentLoaded", () => {
  const typed = new Typed('#typed-text', {
    strings: ['Smash your A-Levels.', 'Get smarter feedback.', 'Study less. Achieve more.'],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true
  });

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("You're on the waitlist. We'll be in touch!");
      form.reset();
    });
  }
});
