// Part 1
// The initial numbers that must be verified
const n1 = 8;
const n2 = 14;
const n3 = 9;
const n4 = 19;

// Check if numbers add up to 50
const sumStep1 = n1 + n2; // 8 + 14 = 22
console.log("First, add " + n1 + " and " + n2 + ": " + sumStep1);

const sumStep2 = sumStep1 + n3; // 22 + 9 = 31
console.log("Next, add " + n3 + ": " + sumStep2);

const sum = sumStep2 + n4; // 31 + 19 = 50
console.log("Finally, add " + n4 + ": " + sum);
const isSum50 = (n1 + n2 + n3 + n4) == 50; // true

// Check if all numbers are divisible by 5
const allDivisibleBy5 = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0); 
console.log(allDivisibleBy5); // false

// Check if first number is bigger than last number
const isFirstBigger = n1 > n4;
console.log(isFirstBigger); // false

// Arithmic chain
let result = n2 - n1; // Subtract first from second. 14 - 8 = 6
result = result * n3;  // Multiply by third. 6 * 9 = 54
result = result % n4;  // Find remainder when divided by fourth // 54 % 19 = 16
console.log(result); // 16

// Change isOver25 logic so no (!) is needed
const isUnderOr25 = result <= 25;

console.log("All numbers divisible by 5:", allDivisibleBy5); // false
console.log("Is sum 50:", isSum50); // true
console.log("Is first number bigger than last:", isFirstBigger); // false
console.log("Final result:", result); // 16
console.log("Is result 25 or less:", isUnderOr25); // true

// Part 2
// Provided data
const totalDistance = 1500; // miles
const fuelBudget = 175; // How much money we have for fuel
const fuelCostPerGallon = 3; // dollars per gallon
const milesPerGallon = 30; // How far our car goes with one gallon of fuel!

// Fuel efficiency at different speeds (miles per gallon)
const fuelEfficiency = {
  55: 30,
  60: 28,
  75: 23
};

// Do I have enough money?
const isBudgetEnough = fuelCostPerGallon <= fuelBudget; // 3 <= 175, true 


// Part 2: Practical Math
// Let’s look at a more practical scenario.
// You are planning a cross-country road trip!

// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.

// Set up a program to answer the following questions:
// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?
// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the
// most sense for the trip?
// Log the results of your calculations using string concatenation or template literals.