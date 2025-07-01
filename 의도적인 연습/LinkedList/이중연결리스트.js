class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertFirstNode(data) {
    const newNode = Node(data, null, null);
    this.head = newNode;
    this.lneght++;
  }
}