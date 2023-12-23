"use strict";
//6
function calculateDaysOfWork() {
    let initialWater = parseInt(prompt("Input initial V of water (in liters):"));

    if (initialWater <= 0) {
        console.log("Wrong input . Input positive number.");
    } else {
        let leakagePercentage = 0.1;
        let minWater = 10;
        let currentWater = initialWater;
        let daysOfWork = 0;

        while (currentWater >= minWater) {
            currentWater -= currentWater * leakagePercentage;
            daysOfWork++;
        }

      document.write("V initialWater enough for " + daysOfWork + " days of work.");
        return daysOfWork;
    }
}


//1
const sayError = () => {
    alert("Some error occurred!");
  };
  //2
  const showError = (errorMessage) => {
    alert("Error "+errorMessage+"occurred!");
  };
  
//3
  const CreateHeaders = (N) =>{
        for(let i = 1; i <= N; i++){
           document.write("<h2>Header" + i+"<h2>");   
        }
   };

  //4
  const checkPassword = (x) => {
    return x === "Step" || x === "Web" || x === "JavaScript";   
  };
 
  //5
  const sign = (x) => {
  if (x > 0) {
    return 1;
  } else if (x < 0) {
    return -1;
  } else {
    return 0;
  }
};

//6
const getDayNameByNumber = (dayNumber) => {
    switch (dayNumber) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      default:
        return 'Wrong number';
    }
  };
  
  