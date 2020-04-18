// invert a binary tree

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // change code below this line
  this.invert = function (node = this.root) {
    // if no root
    if (!this.root) {
      return null;
    }
    // if node is a leaf, do nothing. No code neceessary

    // 3 possibilities. 1 child in left, 1 child in right, or 2 children
    if (node.left && !node.right) {
      // 1 child in left
      node.right = node.left;
      node.left = null;
      this.invert((node = node.right));
    } else if (node.right && !node.left) {
      // 1 child in right
      node.left = node.right;
      node.right = null;
      this.invert((node = node.left));
    } else if (node.right && node.left) {
      // 2 children
      const temp = node.left;
      node.left = node.right;
      node.right = temp;
      this.invert((node = node.left)); // do same to left leaf
      this.invert((node = temp)); // do same to right leaf, remember to access node.right at this time, which is temp
    }
  };
  // change code above this line
}

const test = new BinarySearchTree();
test.root = new Node(10);
test.root.left = new Node(5);
test.root.right = new Node(20);

test.root.left.left = new Node(3);

test.root.right.left = new Node(15);
test.root.right.right = new Node(22);
test.invert();
displayTree(test);
