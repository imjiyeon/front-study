//함수 선언식
function hello(name) {
  return "Hello" + name;
}
//함수 표현식
const hello2 = function (name) {
  return "Hello" + name;
};

//화살표 함수
const hello3 = (name) => {
  return "Hello" + name;
};

// function키워드 {}중괄호 return키워드 생략 가능
const hello4 = (name) => "Hello " + fullName;

// 코드가 여러 줄 일때는 {} 생략 불가
const hello5 = (name) => {
  console.log("Hello " + fullName);
  "Hello " + fullName;
};
