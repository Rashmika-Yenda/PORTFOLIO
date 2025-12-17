const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", e => {
  e.preventDefault();
  message.textContent = "Thanks! I will contact you soon.";
});
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const phoneNumber = "916281065827"; // Your number with country code (no +)
  
  const whatsappMessage = 
    `Hello Rashmika,%0A%0A` +
    `Name: ${name}%0A` +
    `Email: ${email}%0A` +
    `Message: ${message}`;

  const whatsappURL = 
    `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  window.open(whatsappURL, "_blank");
});
