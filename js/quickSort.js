const quickSort = (arr, isLow, isHigh, lowArr = [], highArr = [], allHighArr = [], allLowArr = []) => {
  if (arr.length === 1 && isLow) {
    allLowArr.
  }


  if ([...allLowArr, ...allHighArr].length === arr.length ) {
    return [...allLowArr, ...allHighArr] // base case
  }

  // otherwise, implement quick sort

  // 1st time
  let pivotIndex = Math.floor(arr.length / 2) // round down so it's not a float

    // set a pivot point and group items to be greater or less
  arr.forEach(num => {
    
    if (num < arr[pivotIndex]) {
      lowArr.push(num)
    }
    else if (num > arr[pivotIndex]) {
      highArr.push(num)
    }
    // if the numbers are all the same, then it's done sorting
    
  })

  // FIX THIS ****************************************

  if (lowArr.length === 1 ) {
    allLowArr.push(lowArr[0])
    lowArr = [] // delete that branch
  }
  else if (highArr.length === 1 ) {
    allHighArr.push(highArr[0])
    highArr = []
  }

  // for remaining branches, run function recusively

  if (lowArr.length > 0 ) {
    return quickSort(arr = lowArr, lowArr = [], highArr = [], allHighArr, allLowArr)
  }
  if (highArr.length > 0 ) {
    return quickSort(arr = highArr,  lowArr = [], highArr = [], allHighArr, allLowArr))
  }




  // set new pivot point
  // call it again recursively until there is only one element
  // combine into one array

  






  // dev
  console.log(`this is after the forEach. Original arr is ${arr}, lowArr is ${lowArr} and highArr is ${highArr}`)

  // return array
}

console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))