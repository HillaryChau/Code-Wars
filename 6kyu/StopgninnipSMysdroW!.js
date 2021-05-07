/*https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.
Examples:

spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
spinWords("This is a test") => "This is a test" 
spinWords("This is another test") => "This is rehtona test"

Tools: ALGORITHMS STRINGS FORMATTING
*/

function spinWords(str){
  //TODO Have fun :)
  const spun = []
  const arrayofWords = str.split(' ')
  for(let i = 0; i< arrayofWords.length; i++){
    const word = arrayofWords[i]
    if (word.length >= 5){
      const reversedWord= word.split('').reverse().join('')
      spun.push(reversedWord)
    }else{
      spun.push(word)
    }
    
  }
  return spun.join(' ')
}
