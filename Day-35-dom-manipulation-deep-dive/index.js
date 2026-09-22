// Day 35
// : Document Object Model (DOM) Complete Practice

// 1. Selecting Elements
const heading = document.getElementById("title");
const listItems = document.getElementsByClassName("item");
const button = document.querySelector("button.btn");
const anchor = document.querySelector("li a");

// 2. Manipulating Styles via CSS Classes (Separation of Concerns)
heading.classList.add("huge");

// 3. Text Manipulation (innerHTML vs textContent)
heading.innerHTML = "<em>Good Bye</em>";

// 4. Manipulating Attributes
console.log("Original Link:", anchor.getAttribute("href"));
anchor.setAttribute("href", "https://www.bing.com");
anchor.textContent = "Bing";

// 5. Query Selector All & Iteration
const allItems = document.querySelectorAll(".item");
allItems.forEach((item, index) => {
  item.style.color = index % 2 === 0 ? "blue" : "green";
});