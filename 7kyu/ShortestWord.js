/*
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.


describe("Example tests",_=>{
Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
});

*/

function findShort(s){
  let word = s.split(' ')
  let shortestWord = word[0]
  for (let i = 0; i < word.length ; i++){
    if (word[i].length < shortestWord.length){
      shortestWord = word[i]
    } 
  }
  return shortestWord.length
}

