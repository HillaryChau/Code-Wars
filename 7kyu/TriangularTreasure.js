/*
https://www.codewars.com/kata/525e5a1cb735154b320002c8

tags: ALGORITHMS

Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
You need to return the nth triangular number. You should return 0 for out of range values:

  triangular(0)==0,
  triangular(2)==3,
  triangular(3)==6,
  triangular(-10)==0

*/

//Solutions//

// Return the nth triangular number
function triangular( n ) {
  var sum = 0;
    for(i = 0; i<=n ; i++){
       sum += i;
    }
  return sum;
}
