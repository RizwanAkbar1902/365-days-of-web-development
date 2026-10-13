\# Day 36: The Dice Game Challenge



A 2-player dice game built as part of the Angela Yu Web Development Bootcamp, focusing on DOM manipulation, dynamic attribute updates, and random number logic.



\### How It Works

\- Generates a random number from 1 to 6 for both Player 1 and Player 2 using `Math.random()`.

\- Dynamically updates the dice image sources (`dice1.png` to `dice6.png`) via `setAttribute()`.

\- Compares scores using conditional statements and updates the main heading (`h1`) to declare Player 1 wins, Player 2 wins, or a draw.

\- Refreshes game state on page reload.



\### Key Concepts Practiced

\- Pseudo-random number generation (`Math.floor(Math.random() \* 6) + 1`).

\- Dynamic string formatting for asset file paths (`images/dice" + randomNumber + ".png"`).

\- Target selection via `document.querySelectorAll("img")`.

\- Updating DOM element attributes with `.setAttribute()`.

\- Conditional rendering and text updating via `.innerHTML`.



\### How to Run

Open `dicee.html` or `index.html` in your browser and refresh the page to roll the dice.

