//Advising a group of environmental scientists on how to handle the growth and spread of a unique plant species 

// Part 1
  //Provided data
   const PI = 3.14; // The value of PI
   const radius = 5;  // The radius of the circle
   const area = PI * radius * radius; // The total area is 78.5 square feet

   let numberOfPlants = 20; // The number of plants we started with
   let plantSpace = 0.8; // The required space for each plant
   let numberOfWeeksPassed = 0; // The number of weeks that have passed

   console.log("Welcome to the Plant Growth Control System!");
   console.log("The garden has a total space of " + area + " square meters.");

   function isThereEnoughSpace(numberOfPlants, plantSpace) {
     return (numberOfPlants * plantSpace) <= area;
   }




