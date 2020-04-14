// Breath First gets all nodes of a level before going deeper
// Use an array to store each depth level, then loop

// levelOrder() will return breadth-first search left to right
// reverseLevelOrder() will return breadth-first search right to left

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // change code below this line

  this.outputNumArray = [];
  this.levelOrder = function (currentQueue = [this.root]) {
    if (!this.root) {
      return null;
    }
    const nextQueue = [];
    for (let node of currentQueue) {
      this.outputNumArray.push(node.value);
      if (node.left) {
        nextQueue.push(node.left);
      }
      if (node.right) {
        nextQueue.push(node.right);
      }
    } // end of loop of this level
    if (nextQueue.length === 0) {
      // if end
      return this.outputNumArray;
    }
    return this.levelOrder((currentQueue = [...nextQueue]));
  }; // end of levelOrder()

  this.reverseLevelOrder = function (currentQueue = [this.root]) {
    if (!this.root) {
      return null;
    }
    const nextQueue = [];
    for (let node of currentQueue) {
      this.outputNumArray.push(node.value);
      if (node.right) {
        nextQueue.push(node.right);
      }
      if (node.left) {
        nextQueue.push(node.left);
      }
    } // end of loop of this level
    if (nextQueue.length === 0) {
      // if end
      return this.outputNumArray;
    }
    return this.reverseLevelOrder((currentQueue = [...nextQueue]));
  }; // end of reverseLevelOrder()

  // change code above this line
}

const test = new BinarySearchTree();
test.root = new Node(1);
test.root.left = new Node(2);
test.root.right = new Node(3);
test.root.left.left = new Node(4);
test.root.left.right = new Node(5);
console.log(test.levelOrder());
console.log(test.reverseLevelOrder());
