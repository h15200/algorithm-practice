// using FCC default challenege starter

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.remove = function (value) {
    if (this.root === null) {
      return null;
    }
    var target;
    var parent = null;
    // find the target value and its parent
    (function findValue(node = this.root) {
      if (value == node.value) {
        target = node;
      } else if (value < node.value && node.left !== null) {
        parent = node;
        return findValue(node.left);
      } else if (value < node.value && node.left === null) {
        return null;
      } else if (value > node.value && node.right !== null) {
        parent = node;
        return findValue(node.right);
      } else {
        return null;
      }
    }.bind(this)());
    if (target === null) {
      return null;
    }
    // count the children of the target to delete
    var children =
      (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);
    // case 1: target has no children
    if (children === 0) {
      if (target == this.root) {
        this.root = null;
      } else {
        if (parent.left == target) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
    } else if (children === 1) {
      let targetChild;
      target.right ? (targetChild = target.right) : (targetChild = target.left);
      console.log(`targetChild is ${JSON.stringify(targetChild)}`);
      if (target == this.root) {
        // target is root
        this.root = targetChild;
      } else {
        // target is not root. have access to target, parent, target.child
        if (parent.left == target) {
          parent.left = targetChild;
        } else if (parent.right == target) {
          parent.right = targetChild;
        }
      }
    }
    // case 2: target has one child, change code below this line
  };
}

// const test = new BinarySearchTree();
// test.root = new Node(1);
// test.root.right = new Node(2);
// test.root.left = new Node(0.4);
// test.root.right.right = new Node(5);
// test.remove(2);
// displayTree(test);
