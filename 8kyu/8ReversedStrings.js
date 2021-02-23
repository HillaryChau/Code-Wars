/* Complete the solution so that it reverses the string passed into it.
example: */


function solution(str){
  let x = [...str]
  //... spread syntax -helps gets the whole array with its values w/o loop//
  let y = x.reverse()
  return y.join("")
  //.join() if nothing is in the () it will use a (,) in between the array items
}


/* SHORTER METHOD
return [...str].reverse().join('')
*/
