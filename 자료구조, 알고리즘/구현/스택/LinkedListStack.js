// 구현하는데 이중 연결리스트가 필요할까? 안필요하다  
class Node {
  constructor(data) {
    this.prev = null;
    this.next = null;
    this.data = data;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length =0; 
  }

  push(data) {
    const newNode = new Node(data);
  
    if(this.length === 0){
      this.head = newNode;    
      this.tail = newNode;
      this.length++;
    }
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
    }
  }

  pop() {
    if(this.length === 0) {
      console.log("리스트에 데이터가 없습니다.");
    }
    else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
    }
  }

  printAll() {
    if(this.length === 0) {
      console.log("리스트에 데이터가 없습니다.");
      return;
    }
    else {
      let current = this.head;
      const result = []
      while(current !== null) {
        result.push(current.data);
        current = current.next;
      }
      console.log(result.join(" "));
    }
  }

}

const stack = new Stack();

stack.push(0);
stack.push(1);
stack.push(2);
stack.printAll();
stack.pop();
stack.printAll();