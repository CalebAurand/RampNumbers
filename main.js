//boundaries - find the ramp numbers
//starting number cannot be greater than 99999, and cannot be less than zero
//input must be a number

//build a function that will loop through all the numbers below a given input
// and return the number of ramp numbers found

/*This function takes in the start input and returns the total
*number of ramp numbers that are less than start
* {number} - start - starting number for function
*/
const rampNumbers = (start) => {
    //check to make sure the start number is valid (greater than 0 and less than 99,999 if it is not then break out of the function);
    if(start<0 || start>99999){
      return;
    }
    //create a counter that holds the total of ramp numbers
    let total = 0;
    //create a loop to run through all numbers less than {start}
    for(let i = start; i>0; i--){
      //for every number in the loop check if it is a ramp number
      //if it is, then increase the counter
      if(rampCheck(i)){
        total++;
        // console.log(i);
      }
      //if i is not a ramp number, keep looping until complete
    };
    //return the total number of ramp numbers at the end of the function
    return total;
  };
  
  const rampCheck=(inputNumber)=>{
    
    //create a variable to hold the individual numbers
    let compareArray = [];
    //*****compare 10,000's spot
    compareArray[0] = inputNumber/10000;
    //round number down to integer for ease of comparison
    compareArray[0] = Math.floor(compareArray[0]);
    
    //*****compare 1,000's spot
    compareArray[1] = inputNumber/1000;
    //if 1000's spot is greater than 10, subtract 10 until is is less than 10
    while(compareArray[1]>9){
      compareArray[1] = compareArray[1]-10;
    };
      //round number down to integer for ease of comparison
    compareArray[1] = Math.floor(compareArray[1]);
    
    //*****compare 100's spot
    compareArray[2] = inputNumber/100;
    //if compareArray[2] is greater than 100 subtract 100
    while(compareArray[2]>99){
      compareArray[2] = compareArray[2]-100;
    };
    //if compareArray[2] is greater than 10 subtract 10
    while(compareArray[2]>9){
      compareArray[2] = compareArray[2]-10;
    };
      //round number down to integer for ease of comparison
    compareArray[2] = Math.floor(compareArray[2]);
    
    //*****compare 10's spot
    compareArray[3] = inputNumber/10;
    //if compareArray[3] is greater than 1,000 subtract 1,000
    while(compareArray[3]>999){
      compareArray[4] = compareArray[3]-1000;
    };
    //if compareArray[3] is greater than 100 subtract 100
    while(compareArray[3]>99){
      compareArray[3] = compareArray[3]-100;
    };
    //if compareArray[3] is greater than 10 subtract 10
    while(compareArray[3]>9){
      compareArray[3] = compareArray[3]-10;
    };
        //round number down to integer for ease of comparison
    compareArray[3] = Math.floor(compareArray[3]);
    
    //*****compare 1's spot
    compareArray[4] = inputNumber;
      //if compareArray[4] is greater than 10,000 subtract 10,000
    while(compareArray[4]>9999){
      compareArray[4] = compareArray[4]-10000;
    };
    //if compareArray[4] is greater than 1,000 subtract 1,000
    while(compareArray[4]>999){
      compareArray[4] = compareArray[4]-1000;
    };
    //if compareArray[4] is greater than 100 subtract 100
    while(compareArray[4]>99){
      compareArray[4] = compareArray[4]-100;
    };
    //if compareArray[4] is greater than 10 subtract 10
    while(compareArray[4]>9){
      compareArray[4] = compareArray[4]-10;
    };
  
    // print statements for visual testing purposes
    // console.log("inputNumber,", inputNumber);//starting number
    // console.log("inputNumber divided by 10,000's spot:", compareArray[0]);
    // console.log("inputNumber divided by 1,000's spot:", compareArray[1]);
    // console.log("inputNumber divided by 100's spot:", compareArray[2]);
    // console.log("inputNumber divided by 10's spot:", compareArray[3]);
    // console.log("inputNumber divided by 1's spot:", compareArray[4]);
  
  
    //if 1's spot is greater than or equal to 10's spot
    //AND 10's spot is greater than or equal to 100's spot
    //AND 100's spot is greater than or equal to 1000's spot
    //AND and 1000's spot is greater than or equal to 10,000's spot
    //THEN return true that number is a ramp number
  
    if(
      compareArray[0]<=compareArray[1] &&
      compareArray[1]<=compareArray[2] &&
      compareArray[2]<=compareArray[3] &&
      compareArray[3]<=compareArray[4]
    ){
      //then
      return true;
    }else{
      return false;
    }
    
  };
  
  // rampCheck(12999);
  // console.log(rampCheck(1234));
  // console.log(rampCheck(123));
  console.log(rampNumbers(123));
  // console.log(rampCheck(4321));
  console.log(rampNumbers(99));
  console.log(rampNumbers(123));
  console.log(rampNumbers(999));
  // console.log(rampNumbers(9999));
  // console.log(rampNumbers(99999));
  
  
  
  //method 1
  //transform input number into a string
  //split input number/string into and array
  //convert each array string back to a number
  //compare each number to see if it matches the GREATER THAN criteria for a ramp number
  //if all of them do, then return true
  
  //method 2
  //divide the input number to find out how many integers are in the 10,000's spot and etcetera down to the 1's spot
  //subtract the unnecessary numbers from each spot for comparison
  //compare each of the spots numbers to see if it matches the GREATER THAN criteria for a ramp number
  //if all of them do, then return true