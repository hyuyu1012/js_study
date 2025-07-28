// 함수 선언(년도를 매개변수로 받는다.)

function isLeapYear(year) {
  if((year % 4 === 0 && year % 100 !==0) || (year % 400 === 0)) {
    console.log(`${year}년은 윤년입니다.`);
  }
  else {
    console.log(`${year}년은 윤년이 아닙니다.`);

  }
}

isLeapYear(2022);