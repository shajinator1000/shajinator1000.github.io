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

// Tabs
document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    button.classList.add('active');
    document.getElementById(button.dataset.tab).classList.remove('hidden');
  });
});

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    answer.classList.toggle('hidden');
  });
});

// Contact Form Handler
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const msg = document.getElementById("formSuccess");
    if (msg) {
      msg.classList.remove("hidden");
    }
    contactForm.reset();
  });
}

// Dark/Light Mode Toggle
const toggleTheme = document.getElementById("themeToggle");
if (toggleTheme) {
  toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    localStorage.setItem("theme", document.body.classList.contains("light-theme") ? "light" : "dark");
  });

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "light") {
    document.body.classList.add("light-theme");
  }
}

// Floating Labels
document.querySelectorAll("input, textarea").forEach(input => {
  const label = input.previousElementSibling;
  if (label && label.tagName === "LABEL") {
    input.addEventListener("input", () => {
      input.value ? label.classList.add("float") : label.classList.remove("float");
    });
  }
});

// Scrollspy
const sections = document.querySelectorAll("main > section[id]");
const navLinks = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 60) {
      navLinks.forEach(link => link.classList.remove("active"));
      const activeLink = document.querySelector(`nav a[href="#${section.id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
});

// Tip of the Day
const tips = [
  "Use spaced repetition to retain facts long-term.",
  "Break study into 25-min Pomodoros with 5-min breaks.",
  "Use past papers to train for timing and confidence.",
  "Summarize each topic in 5 bullet points post-study.",
  "Teach what you learn — it's the fastest way to master it."
];
const tipEl = document.getElementById("tip");
if (tipEl) {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  tipEl.textContent = randomTip;
}

// Countdown
const countdown = document.getElementById("countdown");
if (countdown) {
  const examDate = new Date("2025-06-01T00:00:00Z").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const diff = examDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    countdown.textContent = days > 0 ? `${days} days until A-Levels` : "Good luck today!";
  }, 1000);
}
