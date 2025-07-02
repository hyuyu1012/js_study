const fs = require('fs');
const n = Number(fs.readFileSync("example.txt").toString().trim());

class Node{
  constructor(data){
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}
class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertFirst(data) {
    const newNode = new Node(data);

    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;  
    }
    else{
    newNode.next = this.head
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;    
    }
  }
}

const list = new DoubleLinkedList();
list.insertFirst(1);
list.insertFirst(2);

console.log(list);



// while(true) {}