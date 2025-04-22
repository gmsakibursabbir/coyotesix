document.getElementById("year").textContent = new Date().getFullYear();

// Menu Toggle Logic (if needed)
const hamburgerButton = document.getElementById("hamburger-button");
const mobileMenu = document.getElementById("mobile-menu");

hamburgerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Header background change on scroll
const header = document.getElementById("header");

// Ensure the header starts with the default white-10 class
header.classList.add("white-10");

const changeHeaderBg = () => {
  if (window.scrollY > 10) {
    // Scroll threshold, you can adjust this value
    // Change to white-100 when scrolled
    header.classList.remove("white-10");
    header.classList.add("white-100");
  } else {
    // Revert to white-10 when at the top
    header.classList.remove("white-100");
    header.classList.add("white-10");
  }
};

// Listen for the scroll event
window.addEventListener("scroll", changeHeaderBg);
