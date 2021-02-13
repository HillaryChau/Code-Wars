//These are my Code Wars //

//8- Return Negative//
//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?//

function makeNegative(num) {
  if (num>0){
  return (num * (-1))
  } else if (num === 0){
  return 0
  } else {
  return num
  }
}

//8- GrassHopper Gradebook//
// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.
//
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
//

function getGrade (s1, s2, s3) {
  let score = (s1 + s2 + s3)/3
  if (score >= 90){
    return 'A'
  }else if (score < 90 && score >= 80){
    return 'B'
  }else if (score < 80 && score >= 70){
    return 'C'
  }else if (score < 70 && score >= 60){
    return 'D'
  }else {
      return 'F'
  }
}

//8- Opposite Number//
//Very simple, given a number, find its opposite.//

function opposite(number) {
  return number * -1
}

//8- Even or Odd//
//Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.//

function even_or_odd(number) {
  if(number % 2 === 0){
    return "Even"
  }else{
    return "Odd"

  }
}


//8- Multiply //
//Try to figure why the code does not execute properly [ answer there was no return]

function multiply(a, b){
  return a * b
}
