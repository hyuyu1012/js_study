// 인접 행렬 기반 그래프이기 때문에 노드는 구현하지 않아도 된다.
class Graph {
  constructor(maxVertex) {
    this.matrix = new Array(maxVertex).fill(null).map(() => new Array(maxVertex).fill(0));  //인접 행렬
    this.vertexCount = 0; // 정점의 개수 
    this.maxVertex = maxVertex; // 최대 정점의 개수 
  }
  
  // 정점 삽입 v는 정점의 번호, 정점은 0부터 maxVertex까지
  insertVertex(vertex) {
    if(this.vertexCount + 1 > this.maxVertex) {
      console.log("그래프 정점의 개수를 초과하였습니다.");
      return;
    }
    if (vertex < this.vertexCount) {
      console.log("이미 있는 정점입니다.");
      return;
    }
    this.vertexCount++;
  }


  insertEdge(vertex1, vertex2) {
    if(vertex1 >= this.vertexCount || vertex2 >=this.vertexCount ) {
      console.log("간선을 연결할 수 없습니다. 그래프에 없는 정점이 포함되어 있습니다.");
      return;
    }
    else if (this.matrix[vertex1][vertex2] === 1) {
      console.log("이미 연결되어 있습니다.");
      return;
    }
    else {
      this.matrix[vertex1][vertex2] = 1;
      this.matrix[vertex2][vertex1] = 1;
    }
  }



  printMatrix() {
    console.log(this.matrix.map(row => row.join(" ")).join("\n"));
    console.log("===============");
    }  

    printVertexCount() {
    console.log(`정점의 개수는 ${this.vertexCount}개 입니다.`);
    }   
  }

  // 정점 제거
  // 간선 제거
  // 노드 개수 새기
  // 연결되어 있는 정점 출력하기


const testGraph = new Graph(5);
testGraph.printMatrix();
for (let i = 0; i<5; i++) {
  testGraph.insertVertex(i);
}
testGraph.insertEdge(1,2);
testGraph.insertEdge(2,3);
testGraph.printMatrix();
testGraph.printVertexCount();