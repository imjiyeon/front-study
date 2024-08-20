// 함수
// 정수를 입력 받아, 그 숫자의 구구단을 출력하는 함수를 만드세요

function func(num) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}

// 2단 출력
func(2);
