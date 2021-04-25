/*
https://www.codewars.com/kata/57b68bc7b69bfc8209000307/train/javascript

Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

Tools: FUNDAMENTALS MATHEMATICS ALGORITHMS NUMBERS

*/

function average(scores) {
    // code to calculate the average
    return Math.round(scores.reduce((a,b) => a + b)/scores.length)
}

// function average(scores) {
//  const reducer= (a, current) => a + current 
//  let total = (scores.reduce(reducer))// sum of everything 
//  let  numOfValue = scores.length 
//   return Math.round(total/numOfValue)
// }