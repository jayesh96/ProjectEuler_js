// Problem 6
//The sum of the squares of the first ten natural numbers is, 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


// code start here

'use strict';
const solve_eq = (number) =>{
    let sum_of_first_n_natural_number = (number*(number+1)/2);
    let sum_of_squares_of_first_n_natural_number = (number*(number+1)*(2*number+1))/6
   let equated_value = Math.pow(sum_of_first_n_natural_number,2) - sum_of_squares_of_first_n_natural_number;
   return equated_value;
}


console.log(solve_eq(100));
