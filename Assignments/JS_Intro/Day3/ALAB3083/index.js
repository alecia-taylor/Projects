// Part 1: Fizz Buzz
// We will count from 1 to 100 and check each number
for (let x = 1; x <= 100; x++) {
    // Check if x is divisible by 3
    let divisibleBy3 = (x % 3 === 0);
    
    // Check if x is divisible by 5
    let divisibleBy5 = (x % 5 === 0);
    
    // If the number can be divided by both 3 and 5, print "Fizz Buzz"
    if (divisibleBy3 && divisibleBy5) {
        console.log("Fizz Buzz");
    } 
    // If the number can be divided by 3 only, print "Fizz"
    else if (divisibleBy3) {
        console.log("Fizz");
    } 
    // If the number can be divided by 5 only, print "Buzz"
    else if (divisibleBy5) {
        console.log("Buzz");
    } 
    // If the number cannot be divided by 3 or 5, just print the number
    else {
        console.log(x);
    }
}

// Part 2: Prime Time
//Finding the next prime number after starting point.
let n = 4; // Start looking from this number
let candidate = n + 1; // Begin with the next number

while (true) {
    let isPrime = true; // Assume the number is prime until proven otherwise
    
    if (candidate < 2) { // Numbers below 2 are not prime
        isPrime = false;
    } else {
        // Check if the number has any divisors other than 1 and itself
        for (let x = 2; x < candidate; x++) {
            if (candidate % x === 0) { // If it's divisible, it's not prime
                isPrime = false;
                break; // exit loop 
            }
        }
    }
    
    if (isPrime) { // If we found a prime, print it and stop the loop
        console.log(candidate);
        break;
    }
    candidate++; // Try the next number
}

// Part 3: Feeling Loopy
let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let row = ""; // The current row being processed
let cell = ""; // Each individual cell value
let cells = []; // All cells in a row

// Read each character from the CSV string
for (let char of data) {
    if (char === ',') { // If we add a comma, we finish a cell
        cells.push(cell); 
        cell = ""; // Reset for the next value
    } else if (char === '\n') { // Adding a newline, will finish a row
        cells.push(cell); // Last cell in the row
        console.log(...cells); // Print the full row
        cells = []; // Reset for next row
        cell = ""; // Reset cell storage
    } else { // Otherwise, keep adding characters to the current cell
        cell += char;
    }
}
// Print last row if there's remaining data
if (cell) {
    cells.push(cell);
    console.log(...cells);
}

// Test with another dataset
let data2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
row = "";
cell = "";
cells = [];

// Process the second dataset character by character
for (let char of data2) {
    if (char === ',') { // If comma, store cell and reset
        cells.push(cell);
        cell = "";
    } else if (char === '\n') { // If newline, store row and reset
        cells.push(cell);
        console.log(...cells);
        cells = [];
        cell = "";
    } else { // Otherwise, keep adding characters to the cell
        cell += char;
    }
}
// Print last row if there's remaining data
if (cell) {
    cells.push(cell);
    console.log(...cells);
}