# 큐
FIFO(First in First Out) 방식의 선형 자료구조

## 동작 원리
FIFO(First In First Out) 원리에 따라 등작, 즉 가장 처음에 추가된 항목이 가장 먼저 제거되는 방식
push : 큐에 데이터를 추가하는 연산
pop : 큐에서 데이터를 제거하는 ㅇㄴ산
front, back : 스택의 가장 앞, 뒤 요소르 가리키는 포인터

## 구현
배열이나 연결리스트로 구현 가능

## 활용
수강신청 , BFS

## 시간복잡도
* 선형 리스트로 구현하는 경우
  + 원소의 추가 : O(1)
  + 원소의 삭제 : O(n) JS shift() 연산은 배열의 모든 원소를 한칸씩 앞으로 앞당기는 역할을 하므로
  + 원소의 조회 : 인덱스로 접근하는 경우 O(1), 데이터로 접근하는 경우 최악의 경우 O(n)

* 연결 리스트로 구현하는 경우
  + 원소의 추가 O(1)
  + 원소의 삭제 O(1)
  + 원소의 조회 : 최악의 경우 O(n)

***js에서는 큐를 연결리스트로 구현하는 것이 유리하다.***