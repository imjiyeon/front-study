/* for문 */

//조건을 만족하는 동안 코드를 반복 실행 (반복횟수가 명확할 때 사용)
for (let i = 1; i <= 10; i++) {
  //초기식; 조건식; 증감식
  console.log(i);
}

let arr = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
// 배열의 요소를 하나씩 꺼내기
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

//for문을 사용하여 배열의 요소 꺼내기
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
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