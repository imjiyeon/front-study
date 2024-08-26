//7. 다음의 익명 함수를 화살표 함수로 변환하세요.
const add = function(a, b) {
  return a + b;
};
//답:
// const add = (a, b) => a + b;

//8.
const greet = function() {
  return "Hello, World!";
};
//답:
// const greet = () => "Hello, World!";

//9.
const logSum = function(a, b) {
  console.log(a + b);
};
//답:
// const logSum = (a, b) => console.log(a + b);

//10.
const multiplyAndAdd = function(a, b, c) {
  const temp = a * b;
  const result = temp + c;
  return result;
};
//답:
// const multiplyAndAdd = (a, b, c) => {
//   const temp = a * b;
//   const result = temp + c;
//   return result;
// };

//11.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(number) {
    return number * 2;
});

//답:
// const doubled = numbers.map((number) => number * 2);

//12.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = arr.filter(function(number) {
    return number % 2 == 0;
});
// 답:
// const evenNumbers = arr.filter((number) => number % 2 == 0);


