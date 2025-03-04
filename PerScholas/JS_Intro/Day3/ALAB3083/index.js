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
                break; // No need to check further, exit loop early
            }
        }
    }
    
    if (isPrime) { // If we found a prime, print it and stop the loop
        console.log(candidate);
        break;
    }
    candidate++; // Try the next number
}

