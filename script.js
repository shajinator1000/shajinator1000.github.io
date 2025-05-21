document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded");

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thanks for joining the OmniExams waitlist!");
    });
  } else {
    console.error("Form not found in the DOM.");
  }
});
