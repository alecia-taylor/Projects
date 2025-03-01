//Advising a group of environmental scientists on how to handle the growth and spread of a unique plant species 

// Part 1
  //Provided data
   const PI = 3.14; // The value of PI
   const radius = 5;  // The radius of the circle
   const area = PI * radius * radius; // The total area is 78.5 square feet

   let numberOfPlants = 20; // The number of plants we started with
   const plantSpace = 0.8; // The required space for each plant
   let numberOfWeeksPassed = 0; // The number of weeks that have passed

   console.log("Welcome to the Plant Growth Control System!");
   console.log("The garden has a total space of " + area + " square meters.");

    // Calculate the maximum number of plants that can fit in the garden
    while(numberOfWeeksPassed < 3) {    
      numberOfWeeksPassed =  numberOfWeeksPassed + 1;
      numberOfPlants = numberOfPlants * 2 // Plants double in size every week
      console.log("--------" + numberOfWeeksPassed + " week(s) has passed. Here are the results--------");
      console.log("Garden Space: " + area + " square feet"); 
      console.log("Number of Weeks: " + numberOfWeeksPassed);
      console.log("Number of plants " + numberOfPlants); 
      console.log("Total Plant Space: " + plantSpace * numberOfPlants + " square feet");
    }
   
     // 3 weeks 
     //console.log>=(area * 0.8) 

// Pruned, to stop the plants from exceeding the capacity of the garden.
// This condition should be met if the plant count after 
// the given number of weeks is greater than 80% of the maximum capacity of the garden.

// Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.

// Planted, if there is room to plant more plants.
// This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.

// Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.
