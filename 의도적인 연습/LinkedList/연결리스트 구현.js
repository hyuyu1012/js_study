class Node{
  constructor(data, link = null) {
    this.data = data;
    this.link = link;
  }
}

class LinkedList{
  constructor() {
    this.head = null; // 데이터가 없는 처음, head에 담긴 값은 null이다.
    this.length = 0;
  }
  // 첫번째 노드로 삽입하는 연산
  insertFirstNode(data) {
    const newNode = new Node(data);
    this.head = newNode;
    this.length++;
  }

  // insertLastNode(data) {
    // const newNode = new Node(data);
    // this.length;
  // }

  // 중간에 삽입(인덱스를 기준으로? 데이터를 기준으로?)
  insertMiddleNode(data, index) {
    if(index < 0) {
      console.log("index가 음수이면 삽입이 불가능합니다.")
    }
    else if (index === 0) {
      return this.insertFirstNode(data);
    }
    // else if (index === this.length) {
      // return this.insertLastNode(data);
    // }
    // 실제 중간 삽입 알고리즘
    else {
      const newNode = new Node(data);
      let count = 0;
      let current = this.head; // 현재 link(js 기준으로는 node)
      // 삽입하기 위해 이전 노드까지 찾는 연산, 시간복잡도O(n)
      while(count < index -1) {
        current = current.link;
        count++;
      }
      newNode.link = current.link;
      current.link = newNode;
      this.length ++;
      console.log(`${index} 위치에 삽입이 완료되었습니다.`)
    }
  }
} 

const testLinkedList = new LinkedList();
testLinkedList.insertFirstNode(1);
testLinkedList.insertMiddleNode(2,1);
testLinkedList.insertMiddleNode(3,1);
console.log(testLinkedList);