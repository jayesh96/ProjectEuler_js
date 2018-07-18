// PROBLEM 1:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// code starts here

var new_arr = [];
var temp_arr = [];
var sum = 0;
var max_length = 1000;


// Initialize new_arr with values [0...1000]
for(let start_index=0;start_index<max_length;start_index++){
	new_arr[start_index] = start_index
}

// check if value is multiple of 3 or not
for(let start_index=0;start_index<max_length;start_index++){
   if(start_index%3 === 0){ // if true push array to temp_arr
    new_arr[start_index] = 0;
    temp_arr.push(start_index); 
   }
}

// check if value is multiple of 5 or not

for(let start_index=5;start_index<max_length;start_index++){
   if(start_index%5 === 0){ // if true push array to temp_arr
    new_arr[start_index] = 0;
    temp_arr.push(start_index);
   }
}

let unique_elements = [...new Set(temp_arr)]; // remove duplicate elements in array


// program to calculate sum of elements of array and save the result in sum
for(let i=1;i<unique_elements.length;i++){
  sum+=unique_elements[i];
}

console.log (`The sum is: ${sum}`)
