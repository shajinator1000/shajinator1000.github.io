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

// Modal Logic
const loginLink = document.querySelector('.nav-right li:last-child a');
const modal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');

if (loginLink && modal && closeBtn) {
  loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('show');
  });

  closeBtn.addEventListener('click', () => modal.classList.add('hidden'));

  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('show');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.classList.remove('show');
  });
}

// Hamburger logic
const hamburger = document.querySelector('.hamburger');
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLeft.classList.toggle('show');
    navRight.classList.toggle('show');
  });
}

// Animate sections on scroll
const sections = document.querySelectorAll('.section');
function revealSections() {
  const triggerBottom = window.innerHeight * 0.9;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerBottom) section.classList.add('visible');
  });
}
window.addEventListener('scroll', revealSections);
revealSections();

// Animate hamburger icon
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
  });
}
