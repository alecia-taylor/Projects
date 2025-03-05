// Basic for loops

for (let i = 0; i < 10; i++) {
	console.log(i);
}

for (let i = 10; i > 0; i--){
    console.log(i)
}

// Odd Numbers
for(let i = 1; i < 10; i++){
    if(i % 2 == 1){
        console.log(i)
    }
}

//Even numbers
for(let i = 1; i < 10; i+=3){
    if(i % 2 == 0){
        console.log(i)
    }
}

// Making a triangle with #

let j = "#" // declaring the variable to contain the symbol
for (i = 0; i <= 7; i++){
    console.log(j)
    j = j + "#" // increasing the number of symbols
}

// For loop that prints even for even nums and odd for odd nums
for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    // checking to see if i is even
    console.log(i + " is even");
  } else {
    // i guess it odd if we get here
    console.log(i + " is odd");
  }
}

const str = "Hello World"

/**Standard For Loop*/
for (let i = 0; i < str.length; i++) {
	console.log(str[i]);
}
// For...In loop
for (const s in str){ //gives the properties at the index
    console.log(str[s])
}

// For...Of loop
for (const c of str){
    console.log(c)
}

const str2 = "Hello World";

for (let i = 0; i < str2.length; i++) {
	if (str2[i] == "l") {
		continue;
	}

	console.log(str[i]);
}

/** While Loops */

let m = 30 // external variable
while(m > 0){
    console.log(m)
    m -= 3 // MANDATORY in a while loop
}

let p = 30
while (p > 0) {
	p /= 2;
	p--;

	if (p % 1 != 0) {
		break;// will terminate the entire loop
	}
	
	console.log(p);
}

// count down to 0 from a given number
let t = 22

while (t >= 0) {
    console.log(t)
    t--
}

// Log integers in multiples of 3 as long as they are less than 35.
let z = 35
while (z > 0) {
    if( z % 3 == 0){
    console.log(z)
    }
    z--
}

// Print integers in multiples of 5 as long as they are less than 100
let h = 0
while (h < 100) {
    if (h % 5 == 0){
        h++
        continue // will terminate the current loop iteration
    }
    console.log(h)
    h++
}

/* Labeled Statements */

let x = 1;
let y = 1;

myLoop: while (true) {
	console.log(`Outer loop ${x}.`);
	x++;

	while (true) {
		console.log(`Inner loop ${y}.`);
		y++;

		if (x == 5 && y % 5 == 0) {
			break myLoop;
		} else if (y % 5 == 0) {
			break;
		}
	}


}