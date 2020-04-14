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
