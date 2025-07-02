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

  searchNode(data) {
    let current = this.head;
    let resultIndex = null;
    let count = 0;
  
    for(let i = 0; i < this.length; i++) {
      if(current.data === data) {
        resultIndex = count;
        break;
      }
      current = current.next;
      count++;
    }
    if(resultIndex === null) {
      console.log("리스트에는 해당 데이터가 없습니다.");
    }
    else {
      console.log(`해당 데이터의 위치는 ${resultIndex}입니다.`);
    }
    return resultIndex;
  }
}

const list = new DoubleLinkedList();
list.insertFirst(1);
list.insertFirst(2);
list.insertLast(4);
list.insertMiddle(3,2);
list.printList();
list.searchNode(2);
list.searchNode(11)



// while(true) {}