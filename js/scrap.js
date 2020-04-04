const intersection = arr => {
  // loop through arr with reduce()
  // reducer should combine accum - curr into one that has both elements from each
  // return

  return arr.reduce(
    (acc, curr) => {
      let intersect = []
      curr.forEach(num => {
        if (acc.includes(num)) {
          intersect.push(num)
        }
      })
      acc = [...intersect]
      return acc
    }
  )
}


let a = [1,2,3,5,8]
let b = [2,,3,4,6,5,8]
let c = [2,3,6,8]
console.log(intersection([a,b,c])) // [2,3]