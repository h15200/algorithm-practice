// Depth-First binary searches - three methods

// the main take away from this 5 hour exercise was the concept of recursive functions changing the value of the original function.
// You must have an anchor point to refer back to the recursion level when the deep functinos are done
// in the first method, I called it savedCurrentNode
// in the next two, I called it referenceNode

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2)); // just to print tree
function Node(value) {
  // to add nodes to tree from root
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // change code below this line

  this.inorderOutput = []; // to have storage one level higher than methods

  this.inorder = function (currentNode = this.root) {
    const isDone = (node) =>
      node === null || this.inorderOutput.includes(node.value); // helper
    if (!this.root) {
      return null;
    } // exception. if tree is empty
    // base case - if left node is done
    let savedCurrentNode = currentNode;
    while (!isDone(currentNode.left)) {
      this.inorder((currentNode = currentNode.left));
    }
    this.inorderOutput.push(savedCurrentNode.value);
    while (!isDone(savedCurrentNode.right)) {
      this.inorder((currentNode = savedCurrentNode.right));
    }
    if (isDone(this.root) && isDone(this.root.right)) {
      return this.inorderOutput;
    }
  }; // end of inorder()

  this.preorderOutput = [];
  this.preorder = function (currentNode = this.root) {
    const isDone = (node) =>
      node === null || this.preorderOutput.includes(node.value); // helper
    if (!this.root) {
      return null;
    }
    // root exists
    this.preorderOutput.push(currentNode.value); // push value
    let referenceNode = currentNode;
    while (!isDone(currentNode.left)) {
      this.preorder((currentNode = currentNode.left));
    }
    while (!isDone(referenceNode.right)) {
      this.preorder((currentNode = referenceNode.right));
    }
    if (isDone(this.root.right)) {
      // if the right subtree is done, it's all done
      return this.preorderOutput;
    }
  };

  this.postorderOutput = [];

  this.postorder = function (currentNode = this.root) {
    const isDone = (node) =>
      node === null || this.postorderOutput.includes(node.value); // helper
    if (!this.root) {
      return null;
    }
    let referenceNode = currentNode;
    while (!isDone(referenceNode.left)) {
      this.postorder((currentNode = referenceNode.left));
    }
    while (!isDone(referenceNode.right)) {
      this.postorder((currentNode = referenceNode.right));
    }
    if (isDone(referenceNode.left) && isDone(referenceNode.right)) {
      this.postorderOutput.push(referenceNode.value);
    }

    if (this.postorderOutput.includes(this.root.value)) {
      return this.postorderOutput;
    }
  };
}

const test = new BinarySearchTree();

test.root = new Node(1);
test.root.left = new Node(2);
test.root.right = new Node(3);
test.root.left.left = new Node(4);
test.root.left.right = new Node(5);
console.log(test.inorder());
console.log(test.preorder());
console.log(test.postorder());
