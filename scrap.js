const test = (a, b, c = 0 + 9, d = c, e = d + b) => {
  return e
}

console.log(test(1,2))