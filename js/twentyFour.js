/*
Implement a function that takes a string of four digits as its argument, with each digit 
from 1 to 9 (inclusive) with repetitions allowed, and returns an 
arithmetic expression that evaluates to the number 24. 
If no such solution exists, return "no solution exists".

Rules:
Only the following operators/functions are allowed: multiplication, division, addition, subtraction.
Division should use floating point or rational arithmetic, etc, to preserve remainders.
Forming multiple digit numbers from the supplied digits is disallowed. (So an answer of 12+12 when given 1, 2, 2, and 1 is wrong).
The order of the digits when given does not have to be preserved.
Example input	Example output
solve24("4878");	(7-8/8)*4
solve24("1234");	3*1*4*2
solve24("6789");	(6*8)/(9-7)
solve24("1127");	(1+7)*(2+1)

strategy - brute force do every operation on every combination.
the first pair can only be 1 of 6 and there are only 6 operations each (sub and divide is directional)
index 0-1, 0-2, 0-3, 1-2, 1-3, 2-3

after that, there are only 2 other combinations

*/

const solve24 = (str) => {
  const arr = str.split(''); // split into array of strings

  const permutations = [];
  // get every permutation

  let temp = '';

  const getPermutations = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      // if first digit, reset temp to a single char
      if (arr.length === 4) {
        temp = arr[i];
      } // otherwise, delete digits so it's 4 - current array length long
      else {
        let newTemp = '';
        for (let i = 0; i < 4 - arr.length; i++) {
          newTemp += temp[i];
        }
        temp = newTemp; // keep the digits back to where it was on recursion

        temp += arr[i]; // add the newest digit
      }
      // copy original array, remove the index that was just added
      const copy = [...arr];
      copy.splice(i, 1);
      const newArray = [...copy];

      if (newArray.length > 0) {
        // if not done, keep going
        getPermutations(newArray);
      }
      if (temp.length === 4) {
        permutations.push(temp);
        temp = temp[0] + temp[1] + temp[2]; // delete last char
      }
    }
  };
  getPermutations(arr);
  return permutations;
};

console.log(solve24('1789'));
