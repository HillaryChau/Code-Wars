// write a function that takes two objects
// and returns a new objects that has keys and values
// if both obj have same key, DO NOT include that key + value in the newObj
const obj1 = {
  a: 0,
  b: 1,
  c: 2,
  x: 3,
  y: 4,
  z: 5,
};
const obj2 = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 5,
};
const makeNewObj = (a,b) => {
  //create newObj
  const newObj = {}
  //if akey is NOT in b,add the bkey to newObj
  for (let key in b){
    if (!a[key]){
      newObj[key] = b[key]
    }
  }
  console.log("!bloop", newObj)
  //if bkey is NOT in a,add the akey to newObj
  for (let key in a){
    if (!b[key]){
      newObj[key] = a[key]
    }
  }

  //if akey== bkey inside obj, delete it 
  for (let key in newObj){
    if (a[key] === b[key]){
      delete newObj[key]
    }
  }
  console.log("!aloop", newObj)
 
 
  
  return newObj   
};
console.log(makeNewObj(obj1, obj2));
console.log("expectedOutput", {
  d: 3,
  e: 5,
  x: 3,
  y: 4,
  z: 5,
})
// const expectedOutput = {
//   d: 3,
//   e: 5,
//   x: 3,
//   y: 4,
//   z: 5,
// };
