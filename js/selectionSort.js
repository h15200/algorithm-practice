const selectionSort = arr => {
  // iterate through arr
  let newArr = [...arr]
  for (let i = 0; i < (newArr.length -1 ); i++) {
      const restOfArr = newArr.slice(i+1)
      const lowestNum = Math.min(...restOfArr)


      if (lowestNum < newArr[i]) {
        const indexOfLowestRestOfArr = restOfArr.indexOf(lowestNum)
        const indexOfLowestNewArr = indexOfLowestRestOfArr + 1 + i
  
        const restOfArrayWithoutMin = [...restOfArr.slice(0, indexOfLowestRestOfArr), newArr[i], ...restOfArr.slice(indexOfLowestRestOfArr+1)]
          // console.log(i,restOfArr.slice(indexOfLowestRestOfArr+1, restOfArr.length + 1) )


        // all the array up to current index + new index +   old restOfArr without  new index

        newArr = [...newArr.slice(0, i), newArr[indexOfLowestNewArr], ...restOfArrayWithoutMin]
        
      }
  }
 return newArr
}

console.log(selectionSort([1, 32, 1, 4]))