// https://www.geeksforgeeks.org/quick-sort-vs-merge-sort/

// Strategy - Divide an arr in the middle (index < Math.ceil(n/2)) without any value comparisons. 3 will become 2 left, 1 right
   // Recursively  Continue dividing the left hand side (which is always even) until it's 1-left, 1-right, and sort them into one 2-item array IN order
   // Recursively divide the right hand side until item is 1 or 2 (might be odd), and then sort them
      
   // now we have a bunch of single 1 element arrays
   // combine every pair into 1 sorted array of 2 elements 
   // do the same for 4 elements by sorting with the first element of each pair
   // continue until you have two elements
    // once you have 2 total arrays, sor them by comparing the next element of each array


          // nextOutput is the step where the single elements are sorted
const mergeSort = (initArr,leftCounter = 0, rightCounter = 0) => {
let singleArrayOutput = []
  // split function

  const split = (arr = initArr, left = [], right = []) => {
    if (arr.length === 2) { // for 2 left hand elements, just push both
      singleArrayOutput.push(arr.slice(0,1))
      singleArrayOutput.push(arr.slice(1))

      // put these two elements from singleArrayOutput to sorted singleArrayOutput

      // console.log(`pushed to singleArrayOutput. leftCounter ${leftCounter} right counter ${rightCounter} outpout ${singleArrayOutput}`)
    }
    else if (arr.length === 1) { // for 1 element, push and stop
      singleArrayOutput.push(arr)

      // console.log(`pushed to singleArrayOutput. leftCounter ${leftCounter} right counter ${rightCounter} singleArrayOutput ${singleArrayOutput}`)
    }
    else {

    let splitIndex = Math.ceil(arr.length / 2) // odds will always end up being left:2 and right:1
    left = arr.slice(0, splitIndex)
    right = arr.slice(splitIndex)

    // console.log(`left counter is ${leftCounter} right counter is ${rightCounter} arr is ${arr}, left is ${left} and right is ${right}, singleArrayOutput is ${singleArrayOutput}`)

    split(arr = left, leftCounter += 1)
    split(arr = right, rightCounter += 1 )
    } // end of else
  } // end of split function

  split() // assigns singleArrayOutput with an array of arrays of 1 element each
let arr = [...singleArrayOutput]

// console.log(arr)

  const startMerge = (arr, nextArr = []) => {
// merge pairs into a new arr
    // console.log(`beginning of new recursion.`)
    // console.log(arr)
    // base case
    if (arr.length === 1) {
      return arr[0]
    }
    else {
      let tempArr = []
      for (let i = 0; i < arr.length; i+= 2) { // go through every other index for pairs


        // for even number of pairs (it will only be odd once in the first iteration)
        if (arr[i+1]) {  // if a pair exists, start 
          while (arr[i].length > 0 || arr[i+1].length > 0) {// loop this while numbers are left
            if (arr[i].length === 0) { // if one array is done, copy the entire second one, break
              tempArr = [...tempArr, ...arr[i+1]]
              break
            }
            else if (arr[i+1].length === 0) { // inverse of previous
              tempArr = [...tempArr, ...arr[i]]
              break
            }

            else if (arr[i][0] === arr[i+1][0]) { // two numbers are equal, push them both and delete both
              tempArr = [...tempArr, arr[i][0], arr[i+1][0]]
              arr[i].shift()
              arr[i+1].shift()
            }

            else if (arr[i][0] < arr[i+1][0]) {  // if 1st num of 1st of pair is smaller push first one first
              tempArr = [...tempArr, arr[i][0]]
              arr[i].shift()
            }

          else { // if the first one is smaller than the second, swap order
            tempArr = [...tempArr, arr[i+1][0]]
            arr[i+1].shift()
          }
        } // end of while loop
        // console.log(`end of one cycle of for loop. temp is ${tempArr} and next is ${nextArr}`)
       
        nextArr.push(tempArr)
        tempArr = []

          // console.log(`after pushing temp to next. temp is empty. nextArr is ${nextArr}`)

      }

        else { // if a pair doesn't exist, which means it's the last element of an odd length of an array, just push the single
          nextArr.push(arr[i])
        }
        // console.log(nextArr)

      } // end of forLoop that goes through all pairs

      arr = [...nextArr]
     return startMerge(arr, nextArr = [] )
      // recusively call startMerge with different arr and new nextArr
    }
  } // end of startMerge declaration

  // console.log(arr)
return startMerge(arr) // call and return the result of invoking startMerge with single element arrays
}

// console.log(mergeSort([38,27,43,3,9,82,10]))
console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));