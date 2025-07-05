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
    const temp = this.head.data;
    
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return temp;
  }

  printAll() {
    if(this.length === 0) {
      console.log("리스트에 데이터가 없습니다.");
      return;
    }

    let current = this.head;
    const result = [];
    while(current !== null){
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(" "));
  }
}

const queue = new Queue();
queue.push(1);
queue.push(2);
queue.printAll();
queue.pop();
queue.printAll();
queue.pop();
queue.printAll();
queue.pop();
