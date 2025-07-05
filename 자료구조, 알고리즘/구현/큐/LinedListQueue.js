class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next  = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  
  pop() {
    if(this.length === 0) {
      console.log("리스트에 데이터가 없습니다.");
      return;
    } 
    
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
  }
  
  printAll() {

  }

  search() {

  }
}


