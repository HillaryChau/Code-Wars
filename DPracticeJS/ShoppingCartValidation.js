// Write a function that takes an array of objects and an object
// The array of objects represent items in a shopping cart
// the object describes a shopping list
// the function should return true if it meets the criteria of the shopping list
const shoppingList = {
  budget: 50,
  excludes: 'peanut butter',
  includes: 'soap',
};
// valid
const shoppingCart_0 = [
  { item: 'towel', cost: 5 },
  { item: 'shoes', cost: 5 },
  { item: 'teddy bear', cost: 5 },
  { item: 'soap', cost: 5 },
];
// invalid because total cost exceeds budget
const shoppingCart_1 = [
  { item: 'towel', cost: 49 },
  { item: 'shoes', cost: 5 },
  { item: 'teddy bear', cost: 5 },
  { item: 'soap', cost: 5 },
];
// invalid because cart has peanut butter
const shoppingCart_2 = [
  { item: 'towel', cost: 5 },
  { item: 'shoes', cost: 5 },
  { item: 'peanut butter', cost: 5 },
  { item: 'soap', cost: 5 },
];
// invalid because cart does not include soap
const shoppingCart_3 = [
  { item: 'towel', cost: 5 },
  { item: 'shoes', cost: 3 },
  { item: 'teddy bear', cost: 7 },
  { item: 'avocado', cost: 9 },
];

// list[budget]   => budget is not declared syntax error
// list["budget"] => fine
// list['budget'] => fine
// list.budget.   => fine

const validateShoppingCart = (list, cart) => {
  // check budget
  let cartTotalCost = calcTotalSpent(cart)
  if (cartTotalCost > list.budget){ 
    return false
  } 
  // check excludes
  for (let i=0; i<cart.length; i++){
    if (list.excludes === cart[i].item){ 
      return false 
    }
  }
  // check includes
  let cartIncludesItem = false
  for (let i = 0; i < cart.length; i++){
    if (list.includes === cart[i].item) {
      cartIncludesItem = true
    }
  }
  // final check
  if (cartIncludesItem) {
    return true
  } else {
    return false
  }
};


function calcTotalSpent(cart){
  let sum = 0
  for (let i = 0; i< cart.length; i++){
    // cart[i] is { item: 'towel', cost: 5 },
    sum += cart[i].cost
  }
  return sum
}



console.log(validateShoppingCart(shoppingList, shoppingCart_0)); // true
console.log(validateShoppingCart(shoppingList, shoppingCart_1)); // false
console.log(validateShoppingCart(shoppingList, shoppingCart_2)); // false
console.log(validateShoppingCart(shoppingList, shoppingCart_3)); // false
