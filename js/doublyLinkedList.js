var Node = function (data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
  // change code below this line
  this.add = function (element) {
    if (this.head === null) {
      this.head = new Node(element, null);
      this.tail = new Node(element, null);
    } else if (this.head.next === null) {
      const newNode = new Node(element, this.head);
      this.head.next = newNode;

      this.tail = newNode;
    } else {
      const newNode = new Node(element, this.tail);
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = null;
    }
  };

  this.reverse = function () {
    if (this.head === null) {
      return null;
    }
    // if one element, nothing happens
    else if (this.head.next) {
      // if two elements or more
      // head and tail swap
      // starting from new head, go forward and swap

      const oldHead = this.head;
      const oldTail = this.tail;
      this.head = this.tail;
      this.tail = oldHead;

      // now switch values within each

      this.head.next = oldTail.prev;
      this.head.prev = null;

      this.tail.prev = oldHead.next;
      this.tail.next = null;

      // now loop to the middle items
      let current = this.head.next;
      while (current !== this.tail) {
        const oldNext = current.next;
        current.next = current.prev;
        current.prev = oldNext;

        current = current.next;
      }
    }
  };
};

const test = new DoublyLinkedList();
test.add('one');
test.add('two');
test.add('three');
test.add('four');

test.reverse();
console.log(test);
