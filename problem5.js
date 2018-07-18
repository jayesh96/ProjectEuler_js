
// Problem 5:
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


// code starts here

'use strict';

var starting_value=1;
var increment_value = 1;

while(starting_value)
   {
      if(starting_value%11===0 && starting_value%12===0 && starting_value%13===0 
         && starting_value%14===0 && starting_value%15===0 && starting_value%16===0 
         && starting_value%17===0 && starting_value%18===0 && starting_value%19===0 
         && starting_value%20===0){
          break;
      }

      starting_value = starting_value + increment_value;
   }


console.log(`The value of smallest possible number is ${starting_value}`)