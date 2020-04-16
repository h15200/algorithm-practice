// Node comparisons are done by comparing node.value to target.value.
// note that this will remove leaves but if the delete target is on a node that has children, it will return null

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  // case 1: target has no children, change code below this line

  // what if tree is empty
  // what if node to delete is the root
  // what if there are only 2 ele in tree?

  // we need access to the parent of the target
  this.remove = function (targetValue) {
    if (!this.root) {
      // if tree is empty
      return null;
    }
    if (targetValue === this.root.value) {
      // if the root is the target
      if (!this.root.left && !this.root.right) {
        // and root has no children
        this.root = null;
        return `root deleted`;
      }
    }

    // if at least 2 elements in tree, look for target
    const findTarget = (targetValue, arr = [this.root], nextArr = []) => {
      for (let node of arr) {
        if (node.left && node.left.value === targetValue) {
          // assuming target is a leaf with no children
          if (!node.left.left && !node.left.right) {
            node.left = null;
            return `leaf removed`;
          }
        } else if (node.right && node.right.value === targetValue) {
          if (!node.right.left && !node.right.right) {
            node.right = null;
            return `leaf removed`;
          }
        } else {
          if (node.left) {
            nextArr.push(node.left);
          }
          if (node.right) {
            nextArr.push(node.right);
          }
        }
        // run recursively
        if (nextArr.length === 0) {
          return null;
        } // end of tree and target not found
        // go to next level of nodes
        return findTarget(targetValue, (arr = [...nextArr]), (nextArr = []));
      }
    }; // end of findTarget()

    return findTarget(targetValue);
  }; // end of remove method
}

const test = new BinarySearchTree();

test.root = new Node(1);
test.root.left = new Node(2);
test.root.right = new Node(3);
test.root.left.left = new Node(4);
test.root.left.right = new Node(5);

console.log(test.remove(4));
console.log(test.remove(4));
displayTree(test);

// const node = new Node(1);
// test.root = node;
// console.log(test.remove(1));
