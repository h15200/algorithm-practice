// in this implementation, it will all start from one root Node.
// The root node will have a keys properties which is a Map. It will have a char key, and the value will be that node associated

var Node = function () {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function () {
    this.end = true;
  };
  this.isEnd = function () {
    return this.end;
  };
};
var Trie = function () {
  // change code below this line
  this.root = new Node();

  this.add = function (str, node = this.root) {
    if (!str) {
      // if no more letters, this is the end of the word
      node.setEnd();
      return;
    }
    // if letter is NOT in root.keys, add
    else if (!node.keys.has(str[0])) {
      node.keys.set(str[0], new Node());
    }
    return this.add(str.slice(1), (node = node.keys.get(str[0])));
  };

  this.output = [];

  this.print = function (node = this.root, str = '', nodeValue = null) {
    if (nodeValue) {
      // if nodeValue is set, add to current word builder
      str += nodeValue;
    }

    if (node.isEnd() && str.length > 0) {
      // if a word stops and there's something in word builder
      this.output.push(str);
      if ((node.keys.length = 0)) {
        // if that's the end of this node, reset wordbuilder
        str = '';
      } else {
        node.keys.forEach((value, key) => {
          nodeValue = key;
          this.print((node = value), str, nodeValue);
        });
      }
    } else {
      // if word is not end
      node.keys.forEach((value, keys) => {
        nodeValue = keys;
        this.print((node = value), str, nodeValue);
      });
    }
    return this.output;
  };

  this.isWord = function (str) {
    const wordsInTree = this.print();
    return wordsInTree.includes(str) ? true : false;
  };
  // change code above this line
};

const test = new Trie();

test.add('hi');
test.add('cat');
test.add('c');
// test.add('cat');
// console.log(test.root.keys);
// console.log(test.root.keys.get('c').keys.get('a'));
console.log(test.print());
// console.log(test.root.keys);
