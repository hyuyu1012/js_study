// 테스트용 배열
const arr = [1,2,3,4,5,6,7,8,9,10];
const arr2 = [1,2,3,4];
const number = 11;

// 함수 선언(재귀 함수)
function binarySearch(arr, low, mid, high, number) {
  console.log(`mid : ${mid}....`)

  // 종료조건
  if(low > high) {
    return -1;
  }

  if(arr[mid] === number) {
    console.log(`숫자를 찾았습니다. 숫자가 존재하는 인덱스${mid}`);
    return mid;
  }
  else if (arr[mid] > number) {
   high = mid - 1;
   mid = Math.trunc((low + high) / 2);
   return binarySearch(arr, low, mid, high, number)
  }

  else if (arr[mid] < number) {
    low =  mid + 1;
    mid = Math.trunc((low + high) / 2);
    return binarySearch(arr, low, mid, high, number)  
  }
}

console.log(binarySearch(arr, 0, Math.trunc((0 + arr.length-1) /2), arr.length-1, number))


