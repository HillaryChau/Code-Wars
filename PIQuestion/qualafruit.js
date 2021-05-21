

/*loop thry employee list

return office shopping list the totale of apple oranges grapes
expected outcome 

/*apples : 13
oranges: 21
grapes: 12

function   shopping list

create empty arrays
Apple
Oranges
Grapes

loop thru all the objects in the employees
loop thru the fruit to get the number
push the number into the fruit (eg apple) 
reduce method to add the fruit #

*/

const employees = [
  {
    name: 'Tommy',
    apples: 4,
    oranges: 2,
    grapes: 2
  },
  {
    name: 'Jonathan',
    apples: 1,
    oranges: 12,
    grapes: 5
  },
  {
    name: 'Laura',
    apples: 8,
    oranges: 7,
    grapes: 5
  },
];



function shoppingList(employees){
  let Apples = []
  let Oranges = []
  let Grapes =[]

  const reducer= (a, b) => a + b  
  for (let i=0;i<employees.length;i++){
    Apples.push(employees[i].apples)
    Oranges.push(employees[i].oranges)
    Grapes.push(employees[i].grapes)
  } 

   Apples = Apples.reduce(reducer)
   Oranges = Oranges.reduce(reducer)
   Grapes = Grapes.reduce(reducer)
   console.log(Apples,Oranges,Grapes)
   
   const List = {
     apples : Apples,
     oranges : Oranges,
     grapes: Grapes, 
   }

  return List
}

shoppingList(employees)



// /*
// console.log(employees.name)

//  */
 
// employees.forEach(emp => {
//   // console.log(emp.name)
//   console.log("apple",emp.apples)
//   // we want to loop n times, where n  is number of apples
//   const numOfApples = emp.apples
//   const numOfOranges = emp.oranges
//   for(let n = 0; n < numOfApples; n++) {
//     console.log(emp.name + " ate a apple")
//   }

 
  // Tommy ate a apple   
  
// })

  // Tommy
  // Tommy ate a apple   
  // Tommy ate a apple   
  // Tommy ate a apple   
  // Tommy ate a apple
  // Tommy ate a orange 
  // Tommy ate a orange   
  
   
