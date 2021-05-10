/*https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
Tags: FUNDAMENTALS   ALGORITHMS
*/

function getSum( a,b ){
  let arr = [] 
   //Good luck!
  if (a === b){
    return a
  } else if (a < b) {
  for (let i = a; i <= b ; i++) {
    arr.push(i) 
    }
  } else if (a > b) {
  for (let i = b; i <= a ; i++){
    arr.push(i)
    }
  }
   return arr.reduce((q,w) => q+w, 0) 
}

/*pseudocode
1) if a===b, return a or b
2) else  create empty array,  
3) need a loop (use forEach or for loop) 
for arr[0]=== a, until a[i]=== b 
b is the value , i is the index
push each item into the array? 

4) reduce the array outside the loop
5) return new array



*/
