// 반복문을 사용하여 1부터 10까지 수 중에서 짝수만 출력
for (let i = 1; i < 11; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 1부터 10까지 수 중에서 홀수만 "큰수"부터 출력
for (let i = 10; i >= 1; i--) {
  if (i % 2 == 1) {
    console.log(i); // 9 7 5 3 1
  }
}

// 1부터 10까지 수의 합을 출력
let sum = 0;
for (let i = 1; i < 11; i++) {
  sum = sum + i;
}
console.log(sum);

// 1부터 20까지 수 중에서 3의배수 또는 5의 배수의 합 구하기
let hap = 0;
for (let i = 1; i < 20; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    hap = hap + i;
  }
}
console.log(hap);
