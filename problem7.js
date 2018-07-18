// Problem 7
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//What is the 10 001st prime number?

// code starts here

const arr = max_limit => {

  const number_list = new Array(max_limit).fill(true) //initializes an array of max_limit to true 

  for (let start_index = 2; start_index < Math.sqrt(max_limit); start_index++) {
    // if number is prime, we can start with i * i and mark ever non prime number as false
    if (number_list[start_index]) {
      for (let temp_index = Math.pow(start_index, 2); temp_index < max_limit; temp_index += start_index) {
        number_list[temp_index] = false
      }
    }
  }
 
    // returns array of prime numbers
     return number_list;
}

var numbers_arr_list = arr(1000001);
var prime_numbers_list = []

  // Now we can reduce our number_list to only the Prime indexes that are true

for(var index=0;index<numbers_arr_list.length;index++){
  if(numbers_arr_list[index] == true){
    prime_numbers_list.push(index)
  }
}

console.log(`The 10,001st  prime number is ${prime_numbers_list[10002]}`)
