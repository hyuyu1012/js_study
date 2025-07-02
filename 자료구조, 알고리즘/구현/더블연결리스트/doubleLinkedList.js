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
  insert(data, index) {
    if(index === 0) {
      this.insertFirst(data);
    }
    else if(index <  0 || index > this.length ) {
      console.log("잘못된 범위입니다.");
    }

    else if(index === this.length) {
      this.insertLast(data);
    }
    else {
      this.insertMiddle(data, index);
    }
    
  }
  insertFirst(data) {
    const newNode = new Node(data);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;  
    }
    else {
      newNode.next = this.head
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;    
      }
  }
  
  insertLast(data){
    const newNode = new Node(data);
    let prevNode = this.tail;
    prevNode.next = newNode;
    newNode.prev = prevNode;
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

  delete(data) {
    if(this.head === null) {
      console.log("리스트가 비어있습니다.");
      return;
    }
    else if(this.head.data === data) {
      return this.deleteFirst();
    }
    
    if(this.tail.data=== data) {
      return this.deleteLast();
    }
    else {
      return this.deleteMiddle(data);
    }
  }

  deleteFirst() {
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    }
    else {
      const nextNode = this.head.next;
      nextNode.prev = null;
      this.head = nextNode;
      this.length--;
    }
  }

  deleteLast() {
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    }
    else {
      const prevNode = this.tail.prev;
      prevNode.next = null;
      this.tail = prevNode;
      this.length--;
    }
  }

  deleteMiddle(data) {
    // 첫 노드 삭제 연산은 구현되어 있으니 다음 노드부터
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if(current.data === data) {
        // const와 let은 블록 단위 scope이다.
        const prevNode = current.prev;
        const nextNode = current.next;
        
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        
        this.length--;
        return true;
      }

      current = current.next;
    }  

    console.log("해당 데이터가 없습니다.");
    return false;
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
list.insert(2,0);
list.insert(1,0);
list.insert(0,0);
list.insert(0,3);
list.insert(0.5,1);
list.printList();
list.printList();

