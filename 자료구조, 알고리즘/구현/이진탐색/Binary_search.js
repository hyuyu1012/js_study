// 테스트용 배열
const arr = [1,2,3,4,5,6,7,8,9,10];
const arr2 = [1,2,3,4];
const number = 4;

// 함수 선언(재귀 함수)
function binarySearch(arr, low, mid, high, number) {
  console.log(`mid : ${mid}....`)

  if(arr[mid] === number) {
    console.log(`숫자를 찾았습니다. 숫자가 존재하는 인덱스${mid}`);
    return mid;
  }

  else if (arr[mid] > number) {
    high = mid;
    mid = Math.trunc((low + high) / 2);

    return binarySearch(arr, low, mid, high, number)
  }

  else if (arr[mid] < number) {
    low =  mid;
    mid = Math.trunc((low + high) / 2);
    return binarySearch(arr, low, mid, high, number)  
  }
}

console.log(binarySearch(arr, 0, Math.trunc((0 + arr.length) /2), arr.length, number))


