// write a function that takes an array and str or number
// return true if the str or number appears more than once
// else return false

const arr0 = [
  { number: 19, word: 'pair' }, //t19 tpair
  { number: 133, word: 'red' },
  { number: 13, word: 'value' },
  { number: 19, word: 'key' }, //t19
  { number: 999, word: 'pair' },//tpair
];

const arr1 = [
  { number: 1, word: 'hi' },
  { number: 2, word: 'hello' },
  { number: 44, word: 'hillary' },//t44 
  { number: 5, word: 'bye' }, //tbye
  { number: 44, word: 'bye' },//t44 tbye
];

const toFind = (arr, strOrNum) => {
  // loop thru arr
  // get the word key and compare it to string
  // if matches, put that value into the tracker? 
  // if not match //false
   // create tracker? to see if it shows up more than once, true
  let counter = 0
 
 //loop thry arr
  for (let i = 0; i < arr.length; i++) {
    //if the arr[i].word or arr[i].number  = str or Num 
    if (arr[i].word === strOrNum || arr[i].number === strOrNum) {
      counter +=1
    }
  }
 //checking final counter 
  if (counter > 1){
    return true
  }
 //default, which is in case all conditions aren't true
 return false 
};

console.log(toFind(arr0, 'pair')); // true
console.log(toFind(arr1, 'bye')); // true
console.log(toFind(arr0, 'red')); // false
console.log(toFind(arr1, 'hello')); // false
console.log(toFind(arr0, 'reddd')); // false
console.log(toFind(arr1, 'hellooo')); // false

console.log('\n')

console.log(toFind(arr0, 19)); // true
console.log(toFind(arr1, 44)); // true
console.log(toFind(arr0, 5)); // false
console.log(toFind(arr1, 11)); // false
console.log(toFind(arr0, 13)); // false
console.log(toFind(arr1, 1)); // false
