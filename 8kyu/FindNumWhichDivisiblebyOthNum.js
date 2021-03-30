/*
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
TAGS: ALGORITHMS ARRAYS

Example
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
*/

//solutions//

function divisibleBy(numbers, divisor){
  let newNumbers = []
  for (let i = 0 ; i < numbers.length; i++){
    if (numbers[i] % divisor === 0){
    newNumbers.push(numbers[i])
    } 
  } 
  return newNumbers 
}

//or //

function divisibleBy(numbers,divisor){
  return numbers.filter(n => n % divisor === 0)  //n is the first number of numbers array that can potentially be part of the  new array//
                                                 // => n % divisor === 0 is the condition to filter that out to be put in the new array//       
}




