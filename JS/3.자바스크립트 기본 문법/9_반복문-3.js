/* while문 */

//조건을 만족하는 동안 코드를 반복 실행 (반복횟수가 명확하지 않을때 사용)
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// while을 이용하여 지폐를 동전으로 교환하기
let inputPrice = 7000; //사용자가 넣은 지폐 금액
let coinUnit = 500;
let coinCount = 0; //동전 개수

//사용자가 넣은 금액이 0원이 될때까지 지폐를 동전으로 교환
while (inputPrice > 0) {
  inputPrice = inputPrice - coinUnit;
  coinCount++;
}
console.log("7000원을 동전 " + coinCount + "개로 변경하였습니다!");
