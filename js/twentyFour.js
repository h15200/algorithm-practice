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

strategy 
1. make a helper function, getPermutations for getting all permutations of the original string
2. make another helper function, everyOp that performs every possible operation in order 
3. run everyOp on every permutation 

*/

const solve24 = (str) => {
  /****************  helper function that takes in an array
   * of 4 chars and complies all permutations on an array */

  const permutations = []; // to store permutations
  let temp = ''; // to use as global scope of helper
  const getPermutations = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      // add a digit to the temp string
      // if first digit, reset temp to a single char
      if (arr.length === 4) {
        temp = arr[i];
      } // otherwise, reset digits so it's 4 - current array length long
      else {
        let newTemp = '';
        for (let i = 0; i < 4 - arr.length; i++) {
          newTemp += temp[i];
        }
        temp = newTemp; // temp is now the correct length before adding
        temp += arr[i]; // add the newest digit
      }
      if (temp.length === 4) {
        // if temp is full, push to permutations
        permutations.push(temp);
      } else {
        // if not done, copy, remove the index that was added, and
        // call the new, shorter array recursively
        const copy = [...arr];
        copy.splice(i, 1);
        const newArray = [...copy];
        getPermutations(newArray);
      }
    }
  };

  const arr = str.split(''); // split original string into array of chars
  getPermutations(arr); // invoke helper

  /********************* Helper objects for helper function  *********/

  let outcome = {};

  const operations = {
    // if outcome.record doesn't exist, it is the first operation. else, we are concatenating to existing record and total
    add: (a, b) => {
      if (!outcome.record) {
        outcome.total = a + b;
        outcome.record = `${a}+${b}`;
      } else {
        outcome.total = a + b;
        outcome.record += `+${b}`;
      }
    },
    sub_1: (a, b) => {
      if (!outcome.record) {
        outcome.total = a - b;
        outcome.record = `${a}-${b}`;
      } else {
        outcome.total = a - b;
        outcome.record += `-${b}`;
      }
    },
    sub_2: (a, b) => {
      if (!outcome.record) {
        outcome.total = b - a;
        outcome.record = `${b}-${a}`;
      } else {
        // tricky
        outcome.total = b - outcome.total;
        outcome.record = `${b}-${outcome.record}`;
      }
    },
    mult: (a, b) => {
      if (!outcome.record) {
        outcome.total = a * b;
        outcome.record = `${a}*${b}`;
      } else {
        // add parens for previous addition and subtration
        outcome.total = a * b;
        if (outcome.record.includes('+') || outcome.record.includes('-')) {
          outcome.record = `(${outcome.record})*${b}`;
        } else {
          outcome.record += `*${b}`;
        }
      }
    },
    div_1: (a, b) => {
      if (!outcome.record) {
        outcome.total = a / b;
        outcome.record = `${a}/${b}`;
      } else {
        outcome.total = a / b;
        if (outcome.record.includes('+') || outcome.record.includes('-')) {
          outcome.record = `(${outcome.record})/${b}`;
        } else {
          outcome.record += `/${b}`;
        }
      }
    },
    div_2: (a, b) => {
      if (!outcome.record) {
        outcome.total = b / a;
        outcome.record = `${b}/${a}`;
      } else {
        outcome.total = b / outcome.total;
        if (outcome.record.includes('+') || outcome.record.includes('-')) {
          outcome.record = `${b}/(${outcome.record})`;
        } else {
          outcome.record = `${b}/${a}`;
        }
      }
    },
  };

  const operationsOther = {
    // edge case when doing 3rd digit, combine 3rd and 4th digit
    mult_add: (a, b, c) => {
      outcome.total = a * (b + c);
      if (outcome.record.includes('+') || outcome.record.includes('-')) {
        outcome.record = `(${outcome.record})*(${b}+${c})`;
      } else {
        outcome.record = `${outcome.record}*(${b}+${c})`;
      }
    },
    mult_sub: (a, b, c) => {
      outcome.total = a * (b - c);
      if (outcome.record.includes('+') || outcome.record.includes('-')) {
        outcome.record = `(${outcome.record})*(${b}-${c})`;
      } else {
        outcome.record = `${outcome.record}*(${b}-${c})`;
      }
    },
    div_add: (a, b, c) => {
      outcome.total = a / (b + c);
      if (outcome.record.includes('+') || outcome.record.includes('-')) {
        outcome.record = `(${outcome.record})/(${b}+${c})`;
      } else {
        outcome.record = `${outcome.record}/(${b}+${c})`;
      }
    },
    div_sub: (a, b, c) => {
      outcome.total = a / (b - c);
      if (outcome.record.includes('+') || outcome.record.includes('-')) {
        outcome.record = `(${outcome.record})/(${b}-${c})`;
      } else {
        outcome.record = `${outcome.record}/(${b}-${c})`;
      }
    },
  };

  /*************** Helper function, everyOp() *******/

  const everyOp = (str, currentChar = 1, prevState = {}) => {
    // base case for end of operations
    // doneOther means we did a 3 number operation, so reset two
    if (currentChar === 'done' || currentChar === 'doneOther') {
      if (outcome.total === 24) {
        outcome.answer = outcome.record;
      }
      if (currentChar === 'doneOther') {
        currentChar = 2;
      } else if (currentChar === 'done') {
        currentChar = 3;
      }
      outcome.total = prevState.total;
      outcome.record = prevState.record;
      return;
    }

    const currentRecord = outcome.record;
    const currentTotal = outcome.total;

    if (currentChar === 1) {
      // first run
      for (let method in operations) {
        outcome.record = ''; // reset record to null
        operations[method](parseInt(str[0]), parseInt(str[1]));
        everyOp(str, (currentChar = 2));
        if (outcome.answer) {
          // if answer, done
          return outcome.answer;
        }
      }
    } else if (currentChar === 2) {
      for (let method in operations) {
        outcome.record = currentRecord;
        outcome.total = currentTotal;
        operations[method](outcome.total, parseInt(str[2]));
        everyOp(str, (currentChar = 3));
      }
      for (let method in operationsOther) {
        outcome.record = currentRecord;
        outcome.total = currentTotal;
        operationsOther[method](
          outcome.total,
          parseInt(str[2]),
          parseInt(str[3])
        );
        everyOp(
          str,
          (currentChar = 'doneOther'),
          (prevState = { total: currentTotal, record: currentRecord })
        );
      }
    } else if (currentChar === 3) {
      for (let method in operations) {
        outcome.record = currentRecord;
        outcome.total = currentTotal;

        operations[method](outcome.total, parseInt(str[3]));

        everyOp(
          str,
          (currentChar = 'done'),
          (prevState = { total: currentTotal, record: currentRecord })
        );
      }
    }
  };

  // Now use the two helpers to get the solution

  for (let string of permutations) {
    // for every perm, if there is a solution, break
    if (everyOp(string)) {
      return everyOp(string);
    }
  }
};

console.log(solve24('1127'));
