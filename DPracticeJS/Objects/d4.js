// write a function that takes a string
// and returns an object
// the object's keys are the letters and values are the count of each letter
const toObj = str => {
  // create object
  let obj= {}
  //loop thru string
  for (let i=0;i<str.length;i++) {
    const key = str[i]

    if (key === ' ') {
      continue
    }

    if (obj[key]){
      obj[key] += 1 
    }

    if (!obj[key]){
      obj[key] = 1 
    }
  }
   
 
  console.log("outside loops",obj)
  return obj    
  
};
console.log("Test",toObj('hello hillary'));
console.log("Expt", {
  h: 2,
  e: 1,
  l: 4,
  o: 1,
  a: 1,
  i: 1,
  r: 1,
  y: 1
})
/*
Examples: 

{
  h: 2,
  e: 1,
  l: 4,
  o: 1,
  a: 1,
  r: 1,
  y: 1
}
*/
