/*https://www.codewars.com/kata/58bf79fdc8bd4432d6000029/train/javascript
Task
You know the slogan p, which the agitators have been chanting for quite a while now. Roka has heard this slogan a few times, but he missed almost all of them and grasped only their endings. You know the string r that Roka has heard.

You need to determine what is the minimal number of times agitators repeated the slogan p, such that Roka could hear r.

It is guaranteed the Roka heard nothing but the endings of the slogan P repeated several times.

Example
For p = "glorytoukraine", r = "ukraineaineaine", the output should be 3.

The slogan was "glorytoukraine", and Roka heard "ukraineaineaine".

He could hear it as follows: "ukraine" + "aine" + "aine" = "ukraineaineaine".

Input/Output
[input] string p
The slogan the agitators chanted, a string of lowecase Latin letters.

[input] string r
The string of lowercase Latin letters Roka has heard.

[output] an integer
The minimum number of times the agitators chanted.

Tags: PUZZLES GAMES
*/

function slogans(p,r) {
  let str = ""
  let count = 0
  for (let i = 0; i < r.length; i++ ){
  str = str + r[i] 
  if (p.indexOf(str) > -1){
  console.log(str) 
} else{
  str = r[i]
  count += 1
  console.log(str,"else")
}
 
  } //end of for loop
  console.log(count)
  if (p.indexOf(str) > -1){
    count += 1
  }
  
  return count
}

/*pseucode

indexOf hint

const index = p.indexOf(r(i))

create obj   const count = {}

loop p 
if conditional,  (obj(p(i)))


let str = ""
for (let i = 0; i < r.length; i++ ){
  if (p.indexOf(r(i))){
    str = str + r(i)
  }

}


*/
