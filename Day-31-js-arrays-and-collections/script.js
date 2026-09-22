// Day 31: JavaScript Arrays & Collections
// 365 Days of Web Development

// 1. Creating an Array
let guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

// 2. Accessing Elements & Array Properties
console.log("Total Guests:", guestList.length);
console.log("First Guest:", guestList[0]);

// 3. Array Membership (.includes())
let guestName = "Jack";

if (guestList.includes(guestName)) {
    console.log(`Welcome, ${guestName}! Your name is on the list.`);
} else {
    console.log(`Sorry, ${guestName}, maybe next time.`);
}

// 4. Adding Elements (.push())
guestList.push("Rizwan");
console.log("Updated Guest List:", guestList);