// js에서는 this를 생략할 수 없다.
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
    const newNode = new Node(data, null, null);
    if(this.length === 0) {
      this.head = newNode;
      this.length++;
    }
    else {
      newNode.next = this.head
      this.head = newNode;
      this.length++;
    }
  }

  insertMiddleNode(data,index) {
    if(index < 0 || index > this.length) {
      console.log("잘못된 인덱스 범위입니다.");
      return;
    }

    if(index === 0) {
      return this.insertFirstNode();
    }
    
    let count = 0;
    let preNode = this.head;
    let nextNode = this.head.next;

    while(count < index) {
      count++;
    }
    
  }
}






const test = new DoubleLinkedList();
test.insertFirstNode(1);
test.insertFirstNode(2);
console.log(test);