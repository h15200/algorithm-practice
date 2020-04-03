const obj = {a:1, b:2, c:3, d:4}

for (stuff in obj) {
  delete obj.b
  console.log(`stuff is ${stuff} and obj is ${JSON.stringify(obj)}`)
}