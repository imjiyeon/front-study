// 함수선언식과 함수표현식의 차이

func1(); // 정상 실행
function func1() {
  console.log("함수 선언식입니다");
}
// 함수선언식은 함수 코드를 먼저 읽기 때문에, 호출코드가 위에 있어도 실행됨
// 자바스크립트의 호이스팅 현상

func2(); // 에러남. Cannot access 'func2' before initialization
let func2 = function () {
  console.log("함수 표현식입니다");
};
// 함수표현식은 순차적으로 코드를 읽기 때문에, 호출코드가 위에 있으면 에러남