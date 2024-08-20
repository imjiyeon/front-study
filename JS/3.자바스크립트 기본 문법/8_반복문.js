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

/* for문 */
//조건을 만족하는 동안 코드를 반복 실행 (반복횟수가 명확할 때 사용)
for (let i = 1; i <= 10; i++) {
  //초기식; 조건식; 증감식
  console.log(i);
}

let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
// 배열의 요소를 하나씩 꺼내기
console.log(brands[0]);
console.log(brands[1]);
console.log(brands[2]);
console.log(brands[3]);
console.log(brands[4]);

//for문을 사용하여 배열의 요소 꺼내기
for (let i = 0; i < brands.length; i++) {
  console.log(brands[i]);
}

// 자판기에서 음료를 구매하기
let productList = [
  { name: "솔의눈", price: 700 },
  { name: "커피", price: 700 },
  { name: "파워레이드", price: 1200 },
  { name: "오렌지", price: 1000 },
  { name: "보리차", price: 1200 },
  { name: "밀키스", price: 800 },
];

// 800원으로 구매할 수 있는 음료수 찾기
let inputCoin = 800;
let outputList = [];

for (let i = 0; i < productList.length; i++) {
  if (productList[i].price <= inputCoin) {
    outputList.push(productList[i]); //outputList에 추가
  }
}

for (let i = 0; i < outputList.length; i++) {
  console.log(outputList[i]);
}

/* for-in문 */
let arr = [3, 4, 5];
for (let i in arr) {
  // 배열을 순회하면서 인덱스를 꺼냄
  console.log(i + ", " + arr[i]);
}

/* for-of문 */
for (let v of arr) {
  // 배열을 순회하면서 값을 꺼냄
  console.log(v);
}
