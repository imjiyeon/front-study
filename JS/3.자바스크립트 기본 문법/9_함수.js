/* 함수 선언식 */

//매개변수와 반환값이 없는 함수 선언
//중괄호 안에 실행할 코드를 작성
function hello() {
  console.log("안녕하세요~");
}

//함수 호출
hello(); //함수이름();

//매개변수와 반환값이 있는 함수 선언
//데이터가 반환되며 함수가 종료됨
function sum(x, y) {
  return x + y;
}

//함수 호출 후 반환 받은 결과를 변수에 저장
const result = sum(2, 3);
console.log(result);

/* 함수 표현식 */
//변수 선언하고 함수 대입
const hi = function () {
  console.log("안녕~");
};

hi(); //변수명으로 함수 호출

//함수선언식과 함수표현식의 차이

//함수선언식은 함수를 먼저 읽기 때문에, 호출코드가 위에 있어도 실행됨
// 자바스크립트의 호이스팅 현상
func1();
function func1() {
  console.log("함수 선언식입니다");
}

//함수표현식은 순차적으로 코드를 읽기 때문에, 호출코드가 위에 있으면 에러남
//Cannot access 'func2' before initialization
func2();
let func2 = function () {
  console.log("함수 표현식입니다");
};
