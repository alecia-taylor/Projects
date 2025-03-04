//Part 1
/// Part 1: Fizz Buzz
// We count from 1 to 100 and check each number
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
// This function checks if a number is a prime number
function isPrime(num) {
    // If the number is less than 2, it is not a prime number
    if (num < 2) return false;
    
    // Check if the number can be divided evenly by any number from 2 to its square root
    for (let x = 2; x <= Math.sqrt(num); x++) {
        // If num is divisible by x, it is not a prime number
        if (num % x === 0) return false;
    }
    
    // If no numbers divided it, then it is a prime
    return true;
}

// This function finds the next prime number after a given number
function nextPrime(n) {
    // Start checking from the next number
    let candidate = n + 1;
    
    // Keep checking numbers until we find a prime
    while (true) {
        // If the number is a prime, print it and stop
        if (isPrime(candidate)) {
            console.log(candidate);
            break; // Stop looking once we find a prime
        }
        
        // If it's not prime, try the next number
        candidate++;
    }
}

// Example Usage
let n = 4; // Change this number to test different cases
nextPrime(n); // This will find and print the next prime number