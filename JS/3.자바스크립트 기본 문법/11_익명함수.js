//1.익명함수 만들기
//변수 선언하고 함수 대입
const hello = function () {
  console.log("hello~");
};
hello(); //변수명으로 함수 호출

//2.HTML문서를 클릭하면 팝업 이벤트 발생시키기

// 이벤트리스너는 특정이벤트가 일어나면 코드를 수행하는 함수이다
// 인자: 이벤트종류, 수행할 함수

// 함수를 미리 선언하고 인자로 사용
// function handler(){
//     alert('Clicked!');
// }
// document.addEventListener('click', handler);

// 익명함수를 인자로 사용
document.addEventListener("click", function () {
  alert("Clicked!");
});

//일반함수는 재사용되는 기능에 사용하고, 익명함수는 한번만 사용되는 기능에 사용한다

//3.일반함수와 익명함수의 차이

//일반함수
// 일반함수는 함수를 먼저 읽기 때문에, 호출코드가 위에 있어도 실행이 됨
let result1 = sum1(5, 10);
function sum1(n1, n2) {
  return n1 + n2;
}

//익명함수
// 익명함수는 작성된 순서대로 코드를 읽기 때문에, 호출코드가 위에 있으면 에러남
let result2 = sum2(5, 10);
let sum2 = function (n1, n2) {
  return n1 + n2;
};
