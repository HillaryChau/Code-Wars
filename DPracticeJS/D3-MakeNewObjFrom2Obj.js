/* write a function that takes two objects and makes a new object
 if the two objects have the same key, add their key to the new object
 and combiine their values

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};
const obj2 = {
  a: 5,
  b: 1,
  d: 4,
  e: 6,
};
*/
//////////////Pseudocode////////////

/*reminder note:   [key]:value

we are returning/creating a new obj
1) create new obj
2) for loop thru a (obj1) 
for (let key in obj1) {
  console.log(obj1, key, obj1[key])
}
3) conditionals (inside the loop)
if key of obj1 === obj2, add the values
  newObj.key = obj1.value + obj.value
else create new key and value for newObj
  newObj.newKey = keyValueOfNewObj
4) return newObj outside the loop  

*/

///////Code starts here//////// 
const combineObj = (a,b) => {
  //create newObj
  let newObj = {}
  //loop thru obj b
  for (let key in b){
    if (b[key] !== a[key] && b[key]){
      newObj[key] = b[key] 
    }
  // loop thru obj a
  for (let key in a ){
    //if b key exists in "object a"
    if(b[key]){
      // make key for newObj, to have values a[key] + b[key 
      newObj[key] = a[key] + b[key]
    }
    else if(a[key]){
      newObj[key] = a[key]
    }  
  }
 
  }
  
  console.log("outside loop",newObj)
  console.log("expected output",{a:6,b:3,c:3,d:4,e:6})
  return newObj
  
}

//checking the example by calling the function
console.log(combineObj(obj1, obj2));
