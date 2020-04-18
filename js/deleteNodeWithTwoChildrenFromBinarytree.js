/*
Removing nodes that have two children is the hardest case to implement. 
Removing a node like this produces two subtrees that are no longer connected to the original tree structure. 
How can we reconnect them? One method is to find the smallest value in the right subtree of the 
target node and replace the target node with this value. Selecting the replacement in this way ensures
 that it is greater than every node in the left subtree it becomes the new parent of but also 
 ess than every node in the right subtree it becomes the new parent of. Once this replacement 
 is made the replacement node must be removed from the right subtree. Even this operation is 
 tricky because the replacement may be a leaf or it may itself be the parent of a right subtree. 
 If it is a leaf we must remove its parent's reference to it. Otherwise, it must be the right 
 child of the target. In this case, we must replace the target value with the replacement value 
 and make the target reference the replacement's right child.

 So in my words.. look for target node (that has two children). Now look into target.right any children THAT would have, and
 find the lowest value. Swap that value with the target and make the links work as well.
*/

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
    let target;
    let parent = null;
    // find the target value and its parent
    (function findValue(node = this.root) {
      if (value == node.value) {
        return (target = node);
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
        return;
      } else {
        if (parent.left == target) {
          parent.left = null;
          return;
        } else {
          parent.right = null;
          return;
        }
      }
    }
    // case 2: target has one child
    else if (children == 1) {
      var newChild = target.left !== null ? target.left : target.right;
      if (value === this.root.value) {
        if (this.root.left) {
          this.root = this.root.left;
          return;
        } else {
          this.root = this.root.right;
        }
      } else if (parent === null) {
        target.value = newChild.value;
        target.left = null;
        target.right = null;
        return;
      } else if (newChild.value < parent.value) {
        parent.left = newChild;
        return;
      } else {
        parent.right = newChild;
        return;
      }
      target = null;
      return;
    }
    // case 3: target has two children, change code below this line
    // target is target node
    // parent is parent node of target

    // first edge case - tree only has 3 nodes total and the target is root
    if (target.value === this.root.value) {
      this.root.value = this.root.right.value;
      this.root.right = null;
      return;
    }

    // from here on, tree must have more than 3 nodes total

    // invoke another IIFE to find lowest value node on the right subtree of target AND its parent

    let parentOfReplacementNode = target;
    let replacementNode = null;
    (function findReplacementNode(node = target.right) {
      // only looking in rigNodebtree, so initialize with that
      // first case - if there is no left child, then this is the lowest value, making it the replacement
      if (!node.left) {
        replacementNode = node;
      } else if (node.left) {
        parentOfReplacementNode = node;
        return findReplacementNode((node = node.left));
      } else {
        return null;
      }
    })();

    // console.log(`replacementNode is ${JSON.stringify(replacementNode)}`);
    // // prettier-ignore
    // console.log(
    //   `parent of replacement is ${JSON.stringify(parentOfReplacementNode)}`
    // );

    // at this point the replacementNode is either a leaf or only has a right child

    // find if it's the parent's left or right node
    const targetDirection =
      parent.left.value && parent.left.value === target.value
        ? 'left'
        : 'right';
    // now target is accessible with  parent[targetDirection]

    // find replacement direction. Is always left unless it was to the immediate right of target
    const replacementDirection =
      parentOfReplacementNode.value === target.value ? 'right' : 'left';
    // now replacement is accessible with parentOfReplacemenetChild[replacementDirection]

    // 2 cases at this point. replacementNode is a leaf or has 1 right branch.

    // replacement is a leaf
    // change target value to replacementvalue
    // replacement parent's branch that points to replacement will be null

    target.value = replacementNode.value;
    if (!replacementNode.right) {
      // if replacement is a leaf
      parentOfReplacementNode[replacementDirection] = null;
      return; // done
    }
    // replacement has a right child
    // change target to replacevalue done above already
    parentOfReplacementNode[replacementDirection] = replacementNode.right;
    return;
    // parent of replacevalue's branch is now the old replacevalue's single child
  };
}

const test = new BinarySearchTree();
test.root = new Node(10);
test.root.right = new Node(20);
test.root.left = new Node(1);
test.remove(10);
displayTree(test);

// test.root.left = new Node(5);

// test.root.right = new Node(20);
// test.root.right.left = new Node(15);
// test.root.right.right = new Node(30);
// test.root.right.right.left = new Node(21);
// test.root.right.right.right = new Node(40);
// test.root.right.right.left.right = new Node(25);

// test.remove(20);
// displayTree(test);
