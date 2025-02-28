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

//  How many gallons of fuel will you need for the entire trip? 
const fuelEfficiency = { // miles per gallon at different speeds
  55: 30, // 30 miles per gallon at 55 mph
  60: 28, // 28 miles per gallon at 60 mph
  75: 23, // 23 miles per gallon at 75 mph
};

// Will your budget be enough? Do I have enough money?
const isBudgetEnough = fuelCostPerGallon <= fuelBudget; // 3 <= 175, true 

// How long will the trip take, in hours? Calculated travel time for each speed
const time1 = totalMiles / speed1; // 1500 / 55 = 27.27 hours
const time2 = totalMiles / speed2; // 1500 / 60 = 25.00 hours
const time3 = totalMiles / speed3; // 1500 / 75 = 20.00 hours

// // Comparing the results when traveling at an average of 55, 60, and 75 miles per hour.
console.log("At " + speed1 + " mph, the trip will take " + time1 + " hours."); // 27.27 hours
console.log("At " + speed2 + " mph, the trip will take " + time2 + " hours."); // 25.00 hours
console.log("At " + speed3 + " mph, the trip will take " + time3 + " hours."); // 20.00 hours

// Which makes the most sense for the trip?
const bestSpeed = speed3; // 75 mph
const bestTime = time3; // 20 hours

//Part 3
