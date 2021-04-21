/*

https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/




function bmi(weight, height) {
  let mass = (weight/ (height * height))
   
  if (mass <= 18.5){
    return "Underweight"
  } else if (mass <= 25.0){
    return "Normal"
  } else if (mass <= 30.0){
    return "Overweight"
  } else if (mass > 30){
    return "Obese"
  } else{
    return null
  } 
}
