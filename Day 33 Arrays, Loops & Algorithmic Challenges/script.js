// Day 33: Arrays, Loops & Algorithmic Challenges

// 1. Who's Buying Lunch Challenge
function whosPaying(names) {
  const randomIndex = Math.floor(Math.random() * names.length);
  return `${names[randomIndex]} is going to buy lunch today!`;
}

const team = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
console.log(whosPaying(team));

// 2. 99 Bottles of Beer (While Loop)
function beerSong() {
  let count = 99;
  while (count >= 0) {
    if (count > 1) {
      console.log(`${count} bottles of beer on the wall, ${count} bottles of beer.`);
      console.log(`Take one down and pass it around, ${count - 1} ${count - 1 === 1 ? "bottle" : "bottles"} of beer on the wall.\n`);
    } else if (count === 1) {
      console.log(`1 bottle of beer on the wall, 1 bottle of beer.`);
      console.log(`Take one down and pass it around, no more bottles of beer on the wall.\n`);
    } else {
      console.log(`No more bottles of beer on the wall, no more bottles of beer.`);
      console.log(`Go to the store and buy some more, 99 bottles of beer on the wall.\n`);
    }
    count--;
  }
}

// 3. Fibonacci Generator (For Loop)
function fibonacciGenerator(n) {
  let output = [];
  
  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else if (n > 2) {
    output = [0, 1];
    for (let i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  
  return output;
}

console.log("Fibonacci (1 item):", fibonacciGenerator(1));
console.log("Fibonacci (5 items):", fibonacciGenerator(5));
console.log("Fibonacci (10 items):", fibonacciGenerator(10));