// question 1:  does arr.shift() itself return the deleted item?

// let a = [1, 2, 3]
// console.log(a.shift())
// console.log(a)

// answer 1: yes

// question 2: What does a break statement do

// let i = 0
// while (i === 0) {
//   console.log('hi')
// break
// }

// answer 2: it stops the current loop

// question 3: making a class that returns methods that mimics a priority queue by sorting an incoming queue based on importance value

// function PriorityQueue() {
//   this.collection = []
//   this.printCollection = function () {
//     console.log(this.collection)
//   }
//   // Only change code below this line
//   this.enqueue = (elementArr) => {
//     if (this.collection.length === 0) {
//       this.collection.push(elementArr)
//     } else {
//       for (let i = 0; i < this.collection.length; i++) {
//         // new ele is higher priority than this current ele, splice before
//         if (elementArr[1] < this.collection[i][1]) {
//           this.collection.splice(i, 0, elementArr)
//           break
//         } else {
//           // went through whole list and new item was lowest priority (even equal priority puts the new one last)
//           this.collection.push(elementArr)
//           break
//         }
//       }
//     }
//   }
//   this.dequeue = () => {
//     const removeArr = this.collection.shift()
//     return removeArr[0]
//   }
//   this.size = () => this.collection.length
//   this.front = () => this.collection[0]
//   this.isEmpty = () => this.collection.length === 0
//   // Only change code above this line
// }

// const queue = new PriorityQueue()

// queue.enqueue(['rabbit', 2])
// queue.printCollection()
// queue.enqueue(['bear', 2])
// queue.printCollection()
// queue.enqueue(['human', 2])
// queue.printCollection()
// // queue.dequeue()
// // queue.printCollection()

// question 4: make a circular queue

// class CircularQueue {
//   constructor(size) {
//     this.queue = []
//     this.read = 0
//     this.write = 0
//     this.max = size - 1

//     while (size > 0) {
//       this.queue.push(null)
//       size--
//     }
//   }

//   print() {
//     return this.queue
//   }

//   enqueue(item) {
//     // you can only enqueue items if you are not going past the read pointer, defined by
//     // NOT if you're in the same place as read and the value is not null
//     if (this.write === this.read && this.queue[this.write] !== null) {
//       return null
//     } else {
//       this.queue[this.write] = item
//       this.write = (this.write + 1) % this.queue.length
//       return item
//     }
//   }
//   dequeue() {
//     if (this.read === this.write && this.queue[this.read] === null) {
//       return null
//     } else {
//       const data = this.queue[this.read]
//       this.queue[this.read] = null
//       this.read = (this.read + 1) % this.queue.length
//       return data
//     }
//   }
// }

// const ex = new CircularQueue(5)
// console.log(ex.enqueue(3))
// console.log(ex.print())
// console.log(ex.enqueue(3))
// console.log(ex.print())
// console.log(ex.enqueue(3))
// console.log(ex.print())
// console.log(ex.dequeue())
// console.log(ex.print())
// console.log(ex.dequeue())
// console.log(ex.print())
// console.log(ex.dequeue())

// question 5: if this a class?

// function Node(value) {
//   this.value = value;
//   this.left = null;
//   this.right = null;
// }

// const newNode = new Node(4);
// console.log(newNode instanceof Node);
// console.log(null instanceof Node);
// use THING instanceof Class

// can an if else statement work after another operation immediately to check?

// let a = [];

// if (true) {
//   a.push('patti');
// }
// if (a.length === 1) {
//   console.log(true);
// }

// yes

// making an array with Array and fill
// const test = Array(3).fill('hi'); // ['hi', 'hi', 'hi']

// .fill() has optional 2nd arg and 3rd arg which is the starting index and ending index to fill the value with

// multiple equalities

// remember, '1' is true and '0' is false
// console.log(((2.0 == '2') == new Boolean(true)) == '1'); // true

// can strings use includes?

// const str = 'hello there';
// console.log(str.includes('o'));

// function numberOfNames(num, total = 0, op = true) {
//   const pentagonalArray = [];

//   const numArray = [];
//   for (let i = 1; i < 200; i++) {
//     numArray.push(i);
//     numArray.push(-i);
//   }
//   // formula for pentagonal P(n) = (3n**2 -2) /2
//   for (let num of numArray) {
//     pentagonalArray.push((3 * num ** 2 - num) / 2);
//   }

//   console.log(pentagonalArray);
// }

// numberOfNames();

// const a = { a: 0, b: 1 };

// console.log(a['b']);

//  CHALLENGE 1
//   Given an array, return a new array with the duplicate elements removed.
// ​
//   Example:
//   removeDuplicates([3, 1, 3, 2, 9, 1]) ->
//   [3, 1, 2, 9]

// console.log('hi');

// const removeDuplicates = (arr) => {
//   return Array.from(new Set(arr));
// };

// const arr = removeDuplicates([3, 1, 3, 2, 9, 1]);
// console.log(Array.isArray(arr));

//  CHALLENGE 2
//   Given an arbitrary number of arrays, return a new array
//   representing the union of the arrays.
//   Do this in O(n) time.
// ​
//   Example:
// ​
//   union([1, 3, 7], [2, 3, 9], [9, 13]) ->
//   [1, 3, 7, 2, 9, 13]
// ​
//   union([4, 3]) ->
//   [4, 3]
// ​
//   union([6, 7, 8], [7, 8, 9]) ->
//   [6, 7, 8, 9]

// const union = (...arrays) => {
//   const combinedArr = arrays.reduce((a, b) => [...a, ...b]);
//   return Array.from(new Set(combinedArr));
// };

// console.log(union([1, 2, 3], [2, 3, 4], [3, 4, 5]));

// ​
//  CHALLENGE 3
//   Given a string, return the character that has the maximum frequency.
//   If multiple characters occur the max number of times,
//   return the character that occurs first in the string.
// ​
//   Example:
// ​
//   maxChar('good morning') -> 'o'
//   maxChar('abbcc') -> 'b'

// const maxChar = (str) => {
//   const set = new Set(str);
//   const uniqueStr = Array.from(set).join('');
//   if (str === uniqueStr) {
//     console.log('here');
//     return str[0];
//   }
// };
// console.log(maxChar('aabbc'));

//  CHALLENGE 4
//   Given an array of integers and a target integer,
//   return true if a pair of integers exist in the array that add up tot he target.
//   Return false otherwise.
// ​
//   Example:
//   twoSum([2, 4, 5], 9) -> true
//   twoSum([2, 4, 5], 8) -> false
//   twoSum([5, -1, -2, 3], 1) -> true

// bind

function functionBind(func, context) {
  // using bind, bind given func to given context
  //  return func.bind(context);

  // without using bind
  // context = {name: kim}    func = () => alert(this.name)
  context.shout = func;
  return () => context.shout();
}

const matt = {
  name: 'matt',
  shout: function () {
    console.log(this.name);
  },
};

let a = functionBind(matt.shout, { name: 'patti' });
a = functionBind(matt.shout, { name: 'lady' });
a();
//  let boundShout = functionBind(matt.shout, matt);
//  boundShout(); -> alerts 'matt;
//  boundShout = functionBind(matt.shout, {name: 'kim'});
//  boundShout(); -> alerts 'kim'
