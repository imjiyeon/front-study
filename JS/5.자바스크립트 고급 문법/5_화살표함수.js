//함수 선언식
function hello(name) {
  return "Hello " + name;
}

//함수 표현식: 함수를 변수에 할당하는 방식
const hello2 = function (name) {
  return "Hello " + name;
};

//화살표 함수
//함수 표현식에서 익명함수를 화살표함수로 변경할 수 있다
//화살표함수는 function키워드를 생략한다
const hello3 = (name) => {
  return "Hello " + name;
};

// 파라미터가 하나만 있을 때는 괄호를 생략할 수 있다
const hello4 = name => {
  return "Hello " + name;
};

// 함수 안에 유일한 코드가 return 일때, return 키워드와 괄호를 생략할 수 있다
const hello5 = name => "Hello " + name;

// 코드가 여러 줄일 경우 {}중괄호와 return키워드를 반드시 작성해야 한다
const hello6 = name => {
  let result = "Hello " + name;
  return result;
};
