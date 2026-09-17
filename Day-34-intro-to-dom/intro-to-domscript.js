// Day 34: Introduction to the Document Object Model (DOM)

// 1. Inspecting the Root Object
console.log("Document Title:", document.title);

// 2. Selecting Elements
const mainHeading = document.getElementById("title");
const description = document.querySelector(".description");
const button = document.getElementById("action-btn");

// 3. Modifying Content & Styles
mainHeading.textContent = "Welcome to DOM Manipulation!";
description.style.color = "#2563eb";
button.style.cursor = "pointer";

// 4. Basic Event Listener
button.addEventListener("click", () => {
  mainHeading.style.color = "#16a34a";
  console.log("Heading color toggled via DOM event.");
});