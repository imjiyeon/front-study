// 함수
// 숫자를 입력 받아, 팩토리얼을 계산하여 반환하는 함수를 만드세요

function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

//5!
let result = factorial(5);
console.log(result);
