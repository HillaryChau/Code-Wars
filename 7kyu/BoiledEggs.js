/*
https://www.codewars.com/kata/52b5247074ea613a09000164
tags: ALGORITHMS MATHEMATICS NUMBERS RULES

instructions

Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

Rules
you can put at most 8 eggs into the pot at once
it takes 5 minutes to boil an egg
we assume, that the water is boiling all the time (no time to heat up)
for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it
Example
cookingTime(0); // must return 0
cookingTime(5); // must return 5
cookingTime(10); // must return 10
*/

//solutions//

function cookingTime(eggs) {
  return 5 * Math.ceil(eggs / 8);
}
