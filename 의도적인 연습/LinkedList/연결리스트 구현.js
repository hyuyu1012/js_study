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

  // 시간복잡도를 줄일 것이 아니라면, 굳이 마지막 삽입 연산을 구현할 필요는 없다. 마지막 삽입연산은 tail을 이용한다.
  //insertLastNode(data) {
    // const newNode = new Node(data);
    // this.length;
  // }

  // 중간에 삽입(인덱스를 기준으로? 데이터를 기준으로?)
  insertMiddleNode(data, index) {
    if(index < 0) {
      console.log("index가 음수이면 삽입이 불가능합니다.")
    }
    if(index > this.length) {
      console.log(`잘못된 범위입니다. 현재 리스트의 길이는 ${this.length} 입니다.`);
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

  // 연결리스트 데이터 출력
  printList(){
    const result = [];
    let current = this.head;
    // 길이만큼 출력 or 노드의 마지막 링크가 null 이면 출력 중단
    while(current !== null) {
      result.push(current.data);
      current = current.link;
      // currentData = current.data;
    
    }
    console.log(result.join(" "));
  }
} 

const testList = new LinkedList();
testList.insertFirstNode(1);
testList.insertMiddleNode(1,1);
testList.insertMiddleNode(2,2);

testList.printList();