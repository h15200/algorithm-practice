const bubbleSort = arr => {

  let startingArr = [...arr] 
  let newArr = [...arr] 
  let isDone = false

  while (isDone === false) { // do this until it returns the sorted array
  arr.forEach((num, i) => {  
    if (newArr[i] > newArr[i+1]) {
      // if out of order, flip the items, then paste the head and tail around it 
      newArr = [...newArr.slice(0,i), newArr[i+1], newArr[i], ...newArr.slice(i+2)]
    }
  }) // end of forEach sort iteration
  if (JSON.stringify(startingArr) === JSON.stringify(newArr)) { // if the before sort and after sort arrays are the same, done
    return newArr // will stop the function 
  }
  else { // sort is not done, so run it again in the while loop
    startingArr = [...newArr]
  }
 }
}

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));