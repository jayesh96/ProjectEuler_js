
// Problem 2
//The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// code starts here


'use strict';

// function to calculate max prime factor of a number
var max_prime_factor_func = number => {
 

// if number is a multiple of 2 half the value
while(number%2 == 0){
	var max_prime = 2;
	number /= 2
}
 

// check for max prime factor greater than 2
for (var start_index = 3; start_index <= Math.sqrt(number); start_index += 2) {
        while (number % start_index == 0) {
            max_prime = start_index;
            number = number / start_index;
        }
    }
 
 if (number > 2)
        max_prime = number;
 
    return max_prime;
 
}
 
console.log(`The max prime factor of no is ${max_prime_factor_func(600851475143)}`)