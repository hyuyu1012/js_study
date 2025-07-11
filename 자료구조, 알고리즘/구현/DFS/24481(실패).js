  // 알고리즘 탐색 - 깊이 우선 탐색 1(방문 순서 출력하기, 방문하지 못한다면 0)

  const fs = require('fs');
  const input = fs.readFileSync("example.txt").toString().trim().split("\n");
  // N : 정점의 수, M: 간선의 개수, R : 시작 정점
  const [N,M,R] = input[0].split(" ").map(Number);

  const dfs = (R, adjList) => {
    const stack = [];
    const visited  = new Array(N+1).fill(0);
    const depth = new Array(N+1).fill(-1);
    depth[1] = 0;
    let count = 1; 
    stack.push(R);
    const result = [];

    while(stack.length !==0) {
      const node = stack.pop();
      if(visited[node] !== 0) {
        continue;
      }
      const ndepth = depth[node];
      visited[node] = count;
      count++;
     
      adjList[node].forEach(num => {
        if(visited[num] === 0) {
          stack.push(num); 
          if(depth[num] === -1) {
            depth[num] = ndepth + 1;
          }
        }
      })
    }
    
    for(let i = 1; i <= depth.length -1; i++) {
      result.push(depth[i]);
    }
    console.log(result.join("\n"));
  }


  const adjList = Array.from({length : N+1}, () => []);
  for(let i = 1; i<=M; i++) {
    const temp = input[i].split(" ").map(Number);
    adjList[temp[0]].push(temp[1]);
    adjList[temp[1]].push(temp[0]);
  }

  // 정렬
  for (let i = 1; i <= N; i++) {
    adjList[i].sort((a, b) => a - b);
  }

  dfs(R, adjList);