/*
Instructions: Here we will create a max heap. 
Start by just creating an insert method which adds elements to our heap. 

During insertion, it is important to always maintain the heap property. 
For a max heap this means the root element should always have the greatest value in the tree and all 
parent nodes should be greater than their children. For an array implementation of a heap,
this is typically accomplished in three steps:

  Add the new element to the end of the array.

  If the element is larger than its parents, switch them.

  Continue switching until the new element is either smaller than its parent or you reach the root of the tree.


Finally, add a print method which returns an array of all the items that have been added to the heap.


An element's left child: i * 2
An element's right child: i * 2 + 1
An element's parent: Math.floor( i / 2 )
*/

var MaxHeap = function () {
  // change code below this line
  this.collection = [];
  this.collection[0] = null; // first element of max or min heap is usually null

  this.insert = function (num) {
    this.collection.push(num);

    let index = this.collection.indexOf(num);
    let parentIndex = Math.floor(index / 2);
    let parentValue = this.collection[parentIndex];
    let temp;
    while (true) {
      if (parentValue === null || parentValue > num) {
        // if these, then done
        break;
      }
      // switch parent node value with child node
      temp = parentValue;
      this.collection[parentIndex] = num;
      this.collection[index] = temp;
      // relabel everything before the while loop starts again
      index = parentIndex;
      parentIndex = Math.floor(index / 2);
      parentValue = this.collection[parentIndex];
    } // end of while loop
  };

  this.print = function () {
    return this.collection;
  };
  // change code above this line
};

const maxHeap = new MaxHeap();
maxHeap.insert(1);
maxHeap.insert(20);
console.log(maxHeap.print());
