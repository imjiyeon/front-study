//함수 선언식
function hello(name) {
  return "Hello " + name;
}

//함수 표현식
const hello2 = function (name) {
  return "Hello " + name;
};

//함수 표현식에서 익명함수를 화살표함수로 변경할 수 있다
//화살표 함수
const hello3 = (name) => {
  return "Hello " + name;
};

// 화살표함수는 function키워드, {}중괄호, return키워드 생략할 수 있다
const hello4 = (name) => "Hello " + name;

// 코드가 여러 줄 일때는 {}가 필요하고, return을 작성해야 한다
const hello5 = (name) => {
  let result = "Hello " + name;
  return result;
};
