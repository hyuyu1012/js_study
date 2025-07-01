class Node{
  constructor(data, link = null) {
    this.data = data;
    this.link = link;
  }
}
class LinkedList{
  constructor() {
    this.head = null;
    this.length = 0;
  }
  // 맨 앞 인덱스에 노드 삽입
  insertFirstNode(data) {
    const newNode = new Node(data);
    this.head = newNode;
    this.length++;
  }

  // 시간복잡도를 줄일 것이 아니라면, 굳이 마지막 삽입 연산을 구현할 필요는 없다. 마지막 삽입연산은 tail을 이용한다.
  insertLastNode(data) {
     const newNode = new Node(data);
     this.length;
   
  }

  // 중간 노드 삽입 알고리즘
  insertMiddleNode(data, index) {
    if(index < 0) {
      console.log("index가 음수이면 삽입이 불가능합니다.")
    }
    if(index > this.length) {
      console.log(`잘못된 범위입니다. 현재 리스트의 길이는 ${this.length} 입니다.`);
    }
    // 인덱스가 0이거나 length이면 처음, 마지막 삽입 함수 호출
    else if (index === 0) {
      return this.insertFirstNode(data);
    }
    // else if (index === this.length) {
      // return this.insertLastNode(data);
    // }
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
  // 노드 삭제 알고리즘
  // 삭제는 인덱스 기반이 아닌 데이터 기반으로 진행한다.

  deleteNode(){

  }
  // 데이터 검색
  searchNode(data) {
    let current = this.head;
    let count = 0;
    let resultIndex = null;

    while(current !== null) {
      if(current.data === data) {
        resultIndex = count;
        break;
      }
      count++;
      current = current.link;
    }

    if(resultIndex === null) {
      console.log("리스트에 해당 데이터가 없습니다.");
    }
    else {
      console.log(`해당 data가 위치한 index는 ${resultIndex}입니다.`);
    }
    
    return resultIndex;
  }


  // 연결리스트 출력
  printList(){
    const result = [];
    let current = this.head;
    // 노드가 Null이 아닐 때까지 노드 출력
    while(current !== null) {
      result.push(current.data);
      current = current.link;
    }
    console.log(result.join(" "));
  }
} 

const testList = new LinkedList();
testList.insertFirstNode(1);
testList.insertMiddleNode(1,1);
testList.insertMiddleNode(2,2);
testList.printList();
testList.searchNode(5);
testList.searchNode(2);