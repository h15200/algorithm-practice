function insertionSort(array) {
  // compare elements and insert into the correct position
  // return list
  return array.reduce(

    // this is the reducer callback
       (acc, curr) => {
        if (typeof(acc) === 'number') { // runs only the first time to turn number 1 into array [1]
          acc = [acc]
        }
        let tempArr = [...acc] // copy acc so that the length of acc does not grow while running the following for loop

        for (let i = 0; i < acc.length; i++) { // loop through the current done list and insert
          if (acc[i] > curr) { // if element is bigger than curr, insert before. 
            tempArr.splice(i, 0, curr) 
            break // once the element is inserted, stop for loop
          }         
        }
        if (acc.length === tempArr.length) { // if no changes were made, then the element is the last element
          tempArr.push(curr)
        }
        acc = [...tempArr] // reassign acc
        return acc
       }
  )
}

console.log(insertionSort([1,0,3]))
console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))

