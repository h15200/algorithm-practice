function pairwise(arr, arg) {
  if (arr.length === 0) {
    return 0
  }
  let total = 0
  const obj = {}
  const matchObj = {}
  arr.forEach((num, i) => obj[i] = num)

  for (let key in obj) {
    // console.log(`checking for index ${key}, value ${obj[key]}`)
    let sliceIndex = parseInt(key, 10) + 1 // current index plus one is the slice index
    if (arr.slice(sliceIndex).includes(arg - obj[key])) { // if the rest of array includes the pair number
      // find index
     let realIndex = arr.slice(sliceIndex).indexOf(arg - obj[key]) + sliceIndex
      matchObj[key] = obj[key] // copy current key/value to matchObj
      matchObj[realIndex] = obj[realIndex] // copy the matching pair key/value to matchObj
      delete obj[realIndex] // delete the matching pair later in obj
      // console.log(`current pair is ${key}:${obj[key]} and a matching pair exists later. the real index of that is ${realIndex} and the new obj is ${JSON.stringify(matchObj)}`)
    }
  } // end of for in obj loop

return Object.keys(matchObj).reduce((acc, curr) => parseInt(acc, 10) + parseInt(curr, 10))
}

console.log(pairwise([1,4,2,3,0,5], 7))
console.log(pairwise([1,3,2,4], 4))
console.log(pairwise([1,1,1], 2))
console.log(pairwise([0,0,0,0,1,1],1))
console.log(pairwise([],100))
