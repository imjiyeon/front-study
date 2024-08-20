// 함수
// 두 개의 정수를 입력 받아, 그 사이의 모든 숫자의 합을 반환하는 함수를 만드세요.
// 입력: ‘3, 5’ 반환: ’12’ (3 + 4 + 5)

function func(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum = sum + i;
  }

  return sum;
}

let result = func(3, 5);
console.log(result); //12
