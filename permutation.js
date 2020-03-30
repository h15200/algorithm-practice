// Put all the tools to run the recursive function in the parameter. Increment using counter

const permAlone = (str, counter = 1, arr = str.split(''), output = [], setArr = [[...arr[counter-1]]], insertChar = arr[counter]) => {
  // if original str is only 1 char, just return 1 and don't run anything else
  if (str.length === 1) {
    return 1
  }
  // base case. If this is true, then the permutations are done
  else if (counter === (str.length)) {
    // take the last output, run through regex and count the number of arrays in output
    return output
  }

// since at this point we're not done with the last char, reset the output
output = []
let temp = []
  for (let i = 0; i < setArr.length; i++) { // for number of arrays in current working setArr
    for (let j = 0; j <= setArr[0].length; j++) { // for the number of items in each array in setArr + 1
    
    temp = [...setArr[i]] // take current array
    temp.splice(j, 0, insertChar) // insert char in every position 
    output.push(temp) // push each combination into out
  }
}
// run it again, but after incrementing counter and the current output becomes the new set arr, insertChar moves over one to the right
return permAlone(str, counter += 1, arr = str.split(''), setArr = output, output, insertChar = str[counter] )

}

console.log(permAlone('1234'))