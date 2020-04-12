var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}

// this is the challenge
function isBinarySearchTree(tree, current = tree.root) {
  console.log(current);
  if (tree.root === null) {
    return true;
  } // empty tree is valid
  else if (current.value !== null && current.left !== null) {
    if (current.left.value > current.value) {
      return false;
    }
  } else if (current.value !== null && current.right !== null) {
    if (current.right.value < current.value) {
      return false;
    }
  }

  if (current.left) {
    isBinarySearchTree(tree, (current = current.left));
  }
  if (current.right) {
    isBinarySearchTree(tree, (current = current.right));
  }
  return true;

  // change code above this line
}

const test = {
  root: {
    value: 10,
    left: {
      value: 5,
      left: null,
      right: null,
    },
    right: {
      value: 15,
      right: null,
      left: null,
    },
  },
};
console.log(isBinarySearchTree(test));
// isBinarySearchTree(test);
