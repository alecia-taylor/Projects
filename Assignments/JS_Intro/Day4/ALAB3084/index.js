//Part 1
 // Refer to “Part 3.” <String filePath = C:\Users\Zaire\Desktop\dev\alecia-taylor\PerScholas\JS_Intro\Day3\ALAB3083\instructions.md>
 //Provided CSV data: ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
 const category = [ "ID", "Named", "Occupation", "Age"];
    console.log (category);

 const bruce = [ "42", "Bruce", "Knight", 41];
    console.log (bruce);

 const bob = [ "57", "Bob", "Fry Cook", 19]
    console.log (bob);

 const blaine = ["63",  "Blaine", "Quiz Master", 58]          
    console.log (blaine);                                                             

 const bill = [ "98", "Bill", "Doctor’s Assistant", 26]
    console.log (bill);

    //Part 2
const columns = 4;
const rows = 5;
const result = [
    category,
    bruce,
    bob,
    blaine,
    bill
]; 
 
console.log(result);

// Part 3: Sorting and Modifying the Data
result.pop(); // Remove the last entry (bill) from the array

// Insert a new entry for Barry at index 1
const barry = ["48", "Barry", "Runner", 25];
const updatedArray = [
    result[0],    // Keep the header row
    barry,         // Insert Barry here
    ...result.slice(1) // Include the rest of the rows
];

// Add Bilbo to the end of the array
updatedArray.push(["7", "Bilbo", "None", 111]);

console.log("Updated list with Barry and Bilbo:", updatedArray);

// Part 4: Calculating the Average Age
let totalAge = 0;
updatedArray.slice(1).forEach(row => {
    totalAge += parseInt(row[3]); // Extract age from the 4th column
});
const averageAge = totalAge / (updatedArray.length - 1); // Exclude the header row from the count
console.log("Average Age:", averageAge);
    