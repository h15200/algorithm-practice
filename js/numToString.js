var isPalindrome = function(x) {
  if (x < 0) {
      return false
  }
  let arr = []
  let str = x.toString()

  for ( let i = 0; i < str.length; i++ ) {
      arr.unshift(str[i])
  }
  let newNum = parseFloat(arr.join(''))
  return x === newNum ? true: false
};

console.log(isPalindrome(121))

// console.log((121).toString()[0])