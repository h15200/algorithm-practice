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

// add a remove method as well.
// to remove, remove root, move last element into the root position, then make sure both children are smaller than root. if not, switch values

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

  /*********************    REMOVE METHOD  ********/

  this.remove = function () {
    if (this.collection.length < 2) {
      // doesn't apply if heap doesn't exist. first ele is null
      return null;
    }
    const root = this.collection[1];
    if (this.collection.length === 2) {
      // if only root, return a collection with one null
      this.collection = [null];
      return root;
    }
    if (this.collection.length === 3) {
      // if only null, root, and one more
      const temp = this.collection[1];
      this.collection[1] = this.collection[2];
      this.collection.pop();
      return temp;
    }
    // heap is at least 4 items long (3 values)

    const lastElement = this.collection[this.collection.length - 1];

    // swap root with last element, effectively removing the root
    this.collection[1] = lastElement;
    this.collection.pop(); // remove duplicate last ele

    if (this.collection[1] > this.collection[2] && !this.collection[3]) {
      // if new root is bigger than only child and there are no more nodes, done
      return root;
    } else if (this.collection[3] && this.collection[1] > this.collection[3]) {
      // if the new root is bigger than both existing children, done
      return root;
    }

    // now at least one of the children of the root is bigger

    const checkAndShift = (
      parentIndex = 1,
      parent = this.collection[parentIndex],
      leftChild = this.collection[parentIndex * 2],
      rightChild = this.collection[parentIndex * 2 + 1]
    ) => {
      if (parent < leftChild) {
        if ((rightChild && leftChild > rightChild) || !rightChild) {
          const temp = parent;
          this.collection[parentIndex] = leftChild;
          this.collection[parentIndex * 2] = temp;
          checkAndShift(
            (parentIndex = parentIndex + 1),
            (parent = this.collection[parentIndex]),
            (leftChild = this.collection[parentIndex * 2]),
            (rightChild = this.collection[parentIndex * 2 + 1])
          );
        } else if (rightChild && rightChild > leftChild) {
          const temp = parent;
          this.collection[parentIndex] = rightChild;
          this.collection[parentIndex * 2 + 1] = temp;
          checkAndShift(
            (parentIndex = parentIndex + 2),
            (parent = this.collection[parentIndex]),
            (leftChild = this.collection[parentIndex * 2]),
            (rightChild = this.collection[parentIndex * 2 + 1])
          );
        }
      }
    }; // end of checkAndShift()

    checkAndShift();
    return root;
  };

  // change code above this line
};

const maxHeap = new MaxHeap();
maxHeap.insert(100);
// maxHeap.insert(80);
// maxHeap.insert(70);
maxHeap.insert(60);
// maxHeap.insert(5);
// maxHeap.insert(4);
// maxHeap.insert(25);
console.log(maxHeap.remove());
console.log(maxHeap.print());
