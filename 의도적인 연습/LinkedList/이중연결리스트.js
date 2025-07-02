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
    this.tail = null;
    this.length = 0;
  }

  insertFirstNode(data) {
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

  // 중간 삽입 연산
  insertMiddleNode(data,index) {
    if(index < 0 || index > this.length) {
      console.log("잘못된 인덱스 범위입니다.");
      return;
    }

    if(index === 0) {
      return this.insertFirstNode(data);
    }
    
    let count = 0;
    let currentNode = this.head;
    let nextNode = this.head.next;
    const newNode = new Node(data);

    //currentNode(preNode가 될 노드)를 찾아서 연산을 한다. 끝 연산이 없는데?
    while(count < index - 1) {
      currentNode = currentNode.next;
      nextNode = currentNode.next;
      count++;
    }
    currentNode.next = newNode;
    newNode.prev = currentNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++;
  }
  insertLastNode(data) {
    const newNode = new Node(data);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }

  printList() {
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
   while(current !== null) {
    if(current.data === data) {
      resultIndex = count;
      break;
    }
    current = current.next;
    count++;
  }

  if(resultIndex === null) {
    console.log("리스트에 해당 데이터가 없습니다.");
  }
  else {
    console.log(`해당 data가 위치한 index는 ${resultIndex}입니다.`);
  }
  return resultIndex;
  }
}

const test = new DoubleLinkedList();
test.insertFirstNode(1);
test.insertFirstNode(3);
test.insertMiddleNode(2 , 1);
test.insertLastNode(4);
test.searchNode(1);
test.searchNode(2);
test.printList();