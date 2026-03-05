import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

// Load the Home tab by default
loadHome();

// Tab-switching logic
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

homeBtn.addEventListener("click", () => {
  document.getElementById("content").innerHTML = "";
  loadHome();
});

menuBtn.addEventListener("click", () => {
  document.getElementById("content").innerHTML = "";
  loadMenu();
});

contactBtn.addEventListener("click", () => {
  document.getElementById("content").innerHTML = "";
  loadContact();
});