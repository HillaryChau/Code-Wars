/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

class SmallestIntegerFinder {
  findSmallestInt(args) {
    args = args.sort((a,b) => a-b)
    return args[0]
  }
}

////////////another way to do the code////////////////////

function(num) {
  num.sort((a,b)=>{return a-b})
}

///////////smartest way ////////

function(num) {
 return math.min(...num)    /*WHAT IS THIS?!?!?! SPREAD OPERATOR? some magic ES6 stuff*/
}
