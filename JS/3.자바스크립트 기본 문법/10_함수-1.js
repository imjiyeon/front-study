/* 함수 선언식 */
// function 키워드를 사용하여 함수를 정의

//매개변수와 반환값이 없는 경우
//중괄호 안에 실행할 코드를 작성
function hello() {
  console.log("안녕하세요~");
}

//함수 호출
hello(); //함수이름();

//매개변수와 반환값이 있는 경우
//데이터가 반환되며 함수가 종료됨
function sum(x, y) {
  return x + y;
}

//함수 호출 후 반환 받은 결과를 변수에 저장
const sum1 = sum(2, 3);
console.log(sum1);
const sum2 = sum(3, 4);
console.log(sum2);

/* 함수 표현식 */
// 변수에 함수를 대입
const hi = function () {
  console.log("안녕~");
};

hi(); //변수명으로 함수 호출

const calc = function (a, b) {
  return a + b;
};

const calc1 = calc(1,1);
console.log(calc1);
const calc2 = calc(2,2);
console.log(calc2);