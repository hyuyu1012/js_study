const fs = require('fs');
const n = Number(fs.readFileSync("example.txt").toString().trim());

class Node{
  constructor(data, prev, next){
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
  
  insertLast(data){
    const newNode = new Node(data);
    let count = 0;
    let current = this.head;
    while(current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
    newNode.prev = current;
    this.tail = newNode;
    this.length++;
}

  insertMiddle(data, index) {
    const newNode = new Node(data);
    let count = 0;
    let currentNode = this.head;
    let nextNode = this.head.next;

    while(count < index - 1) {
      currentNode = currentNode.next;
      nextNode = currentNode.next
      count++;
    }
  
    currentNode.next =newNode;
    newNode.prev = currentNode;
    nextNode.prev = newNode;
    newNode.next = nextNode;
    this.length++;
  }

  printList(){
    const result = [];
    let current = this.head;
    while(current !== null) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(" "));
  }
}

const list = new DoubleLinkedList();
list.insertFirst(1);
list.insertFirst(2);
list.insertLast(4);
list.insertMiddle(3,2);
list.printList();
// console.log(list);



// while(true) {}