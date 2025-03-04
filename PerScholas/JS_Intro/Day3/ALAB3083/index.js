//Part 1
/// Part 1: Fizz Buzz
// We count from 1 to 100 and check each number
for (let x = 1; x <= 100; x++) {
    // If the number can be divided by both 3 and 5, print "Fizz Buzz"
    if (Math.floor(x / 3) === x / 3 && Math.floor(x / 5) === x / 5) {
        console.log("Fizz Buzz");
    } 
    // If the number can be divided by 3 only, print "Fizz"
    else if (Math.floor(x / 3) === x / 3) {
        console.log("Fizz");
    } 
    // If the number can be divided by 5 only, print "Buzz"
    else if (Math.floor(x / 5) === x / 5) {
        console.log("Buzz");
    } 
    // If the number cannot be divided by 3 or 5, just print the number
    else {
        console.log(x);
    }
}
