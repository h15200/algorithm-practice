// given
function isSorted(arr) {
  var check = (i) =>
    i == arr.length - 1 ? true : arr[i] > arr[i + 1] ? false : check(i + 1);
  return check(0);
}
// generate a randomly filled array
var array = new Array();
(function createArray(size = 5) {
  array.push(+(Math.random() * 100).toFixed(0));
  return size > 1 ? createArray(size - 1) : undefined;
})(25);

var MinHeap = function () {
  // change code below this line
  this.collection = [];
  this.collection[0] = null; // first element of max/min heap is usually null

  /************** Print Method ************/
  this.print = function () {
    return this.collection;
  };

  /*************** Insert Method **********/

  this.insert = function (num) {
    this.collection.push(num);

    let index = this.collection.length - 1;
    let parentIndex = Math.floor(index / 2);
    let parentValue = this.collection[parentIndex];
    let temp;
    while (true) {
      if (parentValue === null || parentValue <= num) {
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

    if (this.collection[1] <= this.collection[2] && !this.collection[3]) {
      // if new root is smaller than only child and there are no more nodes, done
      return root;
    } else if (
      this.collection[3] &&
      this.collection[1] <= this.collection[3] &&
      this.collection[1] <= this.collection[2]
    ) {
      // if right child of root exists and the new root is smaller than it, done
      return root;
    }

    // now at least one of the children of the root is smaller than the new root

    const checkAndShift = (
      parentIndex = 1,
      parent = this.collection[parentIndex],
      leftChild = this.collection[parentIndex * 2],
      rightChild = this.collection[parentIndex * 2 + 1]
    ) => {
      if (parent > leftChild) {
        if ((rightChild && leftChild <= rightChild) || !rightChild) {
          const temp = parent;
          this.collection[parentIndex] = leftChild;
          this.collection[parentIndex * 2] = temp;
          checkAndShift(
            (parentIndex = parentIndex * 2),
            (parent = this.collection[parentIndex]),
            (leftChild = this.collection[parentIndex * 2]),
            (rightChild = this.collection[parentIndex * 2 + 1])
          );
        } else if (rightChild && rightChild <= leftChild) {
          const temp = parent;
          this.collection[parentIndex] = rightChild;
          this.collection[parentIndex * 2 + 1] = temp;
          checkAndShift(
            (parentIndex = parentIndex * 2 + 1),
            (parent = this.collection[parentIndex]),
            (leftChild = this.collection[parentIndex * 2]),
            (rightChild = this.collection[parentIndex * 2 + 1])
          );
        }
      } else if (parent > rightChild) {
        const temp = parent;
        this.collection[parentIndex] = rightChild;
        this.collection[parentIndex * 2 + 1] = temp;
        checkAndShift(
          (parentIndex = parentIndex * 2 + 1),
          (parent = this.collection[parentIndex]),
          (leftChild = this.collection[parentIndex * 2]),
          (rightChild = this.collection[parentIndex * 2 + 1])
        );
      }
    }; // end of checkAndShift()

    checkAndShift();
    return root;
  }; // end of remove

  /************************ Sort Method ***************/
  this.sort = function (arr) {
    // add the random array list one by one into minHeap
    this.collection = [null]; // reset collection
    for (let num of arr) {
      this.insert(num);
    }
    // make new min Heap with array input

    // console.log(this.collection);
    const output = [];

    const copy = [...this.collection];
    while (this.collection.length > 1) {
      output.push(this.remove());
    }
    this.collection = copy;
    console.log(this.collection);
    console.log(output);
    return output;
  };
};

// const test = new MinHeap();

// console.log(isSorted(test.sort(array)));
