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

// Do the math chain
let result = n2 - n1; // Subtract first from second. 14 - 8 = 6
result = result * n3;  // Multiply by third. 6 * 9 = 54
result = result % n4;  // Find remainder when divided by fourth // 54 % 19 = 16
console.log(result); // 16






// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);