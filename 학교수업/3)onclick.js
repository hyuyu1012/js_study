// 웹 요소를 변수로 지정 & 미리 만든 변수 사용
const changeBttn = document.querySelector("#change");
changeBttn.onclick = changeColor;
changeBttn.onmouseover =  changeColor2;

function changeColor() {
  document.querySelector("p").style.color= "#000000";
}

// 웹 요소를 따로 만들지 않고 변수로 사용
document.querySelector("#change").onclick = changeColor;
function changeColor() {
  document.querySelector("p").style.color="#ffffff";
}

// 직접 함수를 선언
document.querySelector("#change").onclick = function () {
  document.querySelector("p").style.color="red";
}