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

   while (numberOfWeeksPassed < 4) {
      // Calculate the maximum number of plants that can fit in the garden
      numberOfWeeksPassed =  numberOfWeeksPassed + 1;
      numberOfPlants = numberOfPlants * 2; // Plants double in size every week
      console.log("--------" + numberOfWeeksPassed + " week(s) has passed. Here are the results--------");
      console.log("Number of Weeks: " + numberOfWeeksPassed);
      console.log("Number of plants " + numberOfPlants); 
      console.log("Total Plant Space: " + plantSpace * numberOfPlants + " square feet");

      const pruned = 0.8 * area; // 80% of total are is 62.8 sq ft
      let currentPlantSpace = plantSpace * numberOfPlants //
      if (currentPlantSpace > pruned) {    
        console.log ("Too many plants in the space. Please prune");
      }//false

      // const monitored = 
      const planted = 0.5 * area; //50% of the total area, 39.25 sq ft
      if (currentPlantSpace > planted && currentPlantSpace < pruned){
        console.log ("Plants are growing at a good rate!")
      }

      // const planted
      if (currentPlantSpace < planted){
        console.log ("Uh oh! It's time to add more plants")
      }
    
  }

 //Part 2 Thinking Bigger
   numberOfPlants = 100 // The number of plants we started with
   numberOfWeeksPassed = 10; // The number of weeks that have passed
   currentPlantSpace = numberOfPlants^numberOfWeeksPassed  // The required space for each plant = 1024
   let newRadius = Math.sqrt(currentPlantSpace / PI); // new radius = 18.02



