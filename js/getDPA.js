/* 
These define three classifications of positive integers based on their proper divisors.

Let  P(n)  be the sum of the proper divisors of n where proper divisors are all positive integers n other than n itself.

If P(n) < n then n is classed as deficient

If P(n) === n then n is classed as perfect

If P(n) > n then n is classed as abundant

Example: 6 has proper divisors of 1, 2, and 3. 1 + 2 + 3 = 6, so 6 is classed as a perfect number.

Implement a function that calculates how many of the integers from 1 to 20,000 (inclusive) are in each of the three classes.
 Output the result as an array in the following format [deficient, perfect, abundant].

 ex. getDPA(20000) should return an array of 3 nums for [deficient, perfect, abundant]



*/

const getDPA = (num) => {
  const data = {
    deficient: 0,
    perfect: 0,
    abundant: 0,
  };

  // destructure

  let { deficient, perfect, abundant } = data;

  for (let i = 1; i <= num; i++) {
    const divisors = [];
    for (let j = 1; j <= i / 2; j++) {
      // only need to go to half of the i to find divisors
      if (i % j === 0) {
        divisors.push(j);
      }
    }
    let sum;
    if (divisors.length === 0) {
      sum = 0;
    } else {
      sum = divisors.reduce((acc, curr) => acc + curr);
    }
    if (sum < i) {
      deficient++;
    } else if (sum > i) {
      abundant++;
    } else if (sum === i) {
      perfect++;
    }
  }

  return [deficient, perfect, abundant];
};

console.log(getDPA(20000));
