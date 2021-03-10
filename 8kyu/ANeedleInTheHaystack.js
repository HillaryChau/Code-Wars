
/*
A Needle in the Haystack
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
*/

function findNeedle(haystack) {
  // your code here
  let index = haystack.indexOf("needle")
  return "found the needle at position " + index
}

/* 
Parameters:, the array called haystack
Returns: message as string, with index of the needle position
Example: 
var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3')
Pseudocode:  
*/
