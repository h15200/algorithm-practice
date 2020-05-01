// first create an array of general pentagonal integers

// use the formulas

// it works, but it's timing out
// solution (after 4 hours!!) is to make a database and set solved solutions before returning it.
// then add ONE simple if then to see if the answer is already in the database

const pentagonalArray = [];

const numArray = [];
for (let i = 1; i < 11; i++) {
  numArray.push(i);
  numArray.push(-i);
}
// formula for pentagonal P(n) = (3n**2 -2) /2
for (let num of numArray) {
  pentagonalArray.push((3 * num ** 2 - num) / 2);
}

// pentagonalArray is set

function numberOfNames(num, operation = true, record = {}) {
  // console.log(pentagonalArray);

  // base case
  if (num === 0) {
    record[0] = 1;
    return 1;
  } else if (num === 1) {
    record[1] = 1;
    return 1;
  } else if (record[num]) {
    return record[num];
  } else {
    // loop through pentagon and compare num to pentagonalArray[i]
    // reference the master record to see if you can bypass the recursive call

    let index;
    for (let i = 0; i < pentagonalArray.length; i++) {
      if (num < pentagonalArray[i]) {
        index = i;
        break;
      }
    }

    const subArray = pentagonalArray.slice(0, index);

    let total = 0;
    for (let i = 0; i < subArray.length; i++) {
      if (operation) {
        total += numberOfNames(num - subArray[i], operation, record);
      } else if (!operation) {
        total -= numberOfNames(num - subArray[i], operation, record);
      }
      if (i % 2 === 1) {
        operation = !operation;
      }
    }
    if (!record[num]) {
      record[num] = total;
      // console.log(record);
    }
    return total;
  }
}

console.log(numberOfNames(123));
