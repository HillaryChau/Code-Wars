function tribonacci(signature,n){
    //your code here
    let newArr = []
    let sumFirstThree = signature[0] + signature[1] + signature[2]
      newArr.push(signature[0])
      newArr.push(signature[1])
      newArr.push(signature[2])
      newArr.push(sumFirstThree)
    for (let i = 0; i<n-4; i++){
      let nextValue = newArr[newArr.length -1] + newArr[newArr.length -2] + newArr[newArr.length -3] 
      newArr.push(nextValue)
      
    }
    if (newArr.length !== n){
      let difference = newArr.length - n //3   [1,1,1,3] ///u;t answer 1
      let finalIndex = newArr.length - difference   //4-3 = 1
      newArr = newArr.slice(0,finalIndex)//[1]
    }
    
      return newArr
      console.log(newArr)
  }
  
  /*(tribonacci([1,1,1],10),///////////[1,1,1,3,5,9,17,31,57,105])
  
  signature[0] === 1  // 
  
  1)push first 3 values into newArr
  2) add first 3 values and push into newArr
  //////loop this process i<=10///////
  3) need to get next 3 values (not including previus first value)
    let nextValue = newArr[newArr.length -1] + newArr[newArr.length -2] + newArr[newArr.length -3]  
  4) newArr.push(nextValue)
  5) return newArr (outside the loops)
  
  
  */