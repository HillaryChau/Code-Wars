/*https://www.codewars.com/kata/51c89385ee245d7ddf000001/train/javascript

Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5) // should return "Value is 00005"

(solution(1204),"Value is 01204")
 (solution(109),"Value is 00109")
 (solution(0),"Value is 00000")
    })
*/

function solution(value){

let valueStr = value.toString()
return "Value is " + valueStr.subString(valueStr.length - 5)
}


function solution(value){

let valueStr = "00000" + value.toString()
return "Value is " + valueStr.substring(valueStr.length - 5)
}


///or///


function solution(value){

 let valueString = value.toString()
 
 if (valueString.length === 1){
   valueString = "0000" + valueString
 }else if (valueString.length === 2){
   valueString = "000" + valueString
 }else if (valueString.length === 3){
   valueString = "00" + valueString
 }else if (valueString.length === 4){
   valueString = "0" + valueString
 }
 return "Value is " + valueString
}





