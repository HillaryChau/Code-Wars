// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name){
    const words = name.split(" ")
    const initials = []
    
    for (let i = 0; i < words.length; i++) {
      initials.push(words[i][0].toUpperCase())
    }
 
   return initials.join(".")
 }