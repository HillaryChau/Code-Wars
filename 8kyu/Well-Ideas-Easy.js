/*
https://www.codewars.com/kata/57f222ce69e09c3630000212




*/

//solution//
const well = x => {
  const good_count = x.filter(x => x == 'good').length;
  return good_count < 1 ? 'Fail!' : 
         good_count < 3 ? 'Publish!' : 'I smell a series!';
}


//or this solution 
function well(x){
 var good = 0
  
  for (var i = 0; i < x.length; ++i)
    if (x[i] == 'good' && ++good > 2)
      return 'I smell a series!'
  
  return good ? 'Publish!' : 'Fail!'
}
