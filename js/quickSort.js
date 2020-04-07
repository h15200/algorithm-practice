// Strategy - inner func divide so we can keep save the value of output in between recursive calls


const quickSort = (initArr, output = []) => {

  if (initArr.length === 1 || initArr.every(num => num === initArr[0])) { // if one item or all the same item, then it's alraedy sorted
  return initArr
}

// otherwise, go on. 

  const divide = (arr = initArr) => {
    let lower = []
    let higher = []
  
  // console.log(`top of divide. initArr is ${initArr}, current arr is ${arr}, output is ${output}`)

  // base case
  if (arr.length === 1 || arr.every(num => num === arr[0])) {
    output = [...output, ...arr]
  }

  else { // otherwise, go on
    // this next block until after while loop will divide the current arr into lower and higher arrays
    // the first pivot point will be the first element, but if that doesn't work, we will increment at the end
    let pivotPoint = 0
    let pivot 

    while (lower.length === 0 || higher.length === 0) { // while higher/lower arrays are empty

    pivot = arr[pivotPoint]
    // clear both arrays
    lower = []
    higher = []

  for (let num of arr) {
    if (num < pivot) {
      lower.push(num)
    }
    else if (num >= pivot) {
      higher.push(num)
    }
  }

  if (lower.length === 0 || higher.length === 0)
  pivotPoint++ // change pivot point and try again

  } // end of while loop

  // console.log(`this is the end of the while loop. lower is ${lower} and  higher is ${higher} and output is ${output}`)

  divide(lower) // this will always call the lower array recursively first, putting everything in order
  divide(higher)
  }
}  // end of divide

  divide(initArr)
  return output
}
// console.log(quickSort([1,4,3,7]))
console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))


// this took all day but... good job, me!