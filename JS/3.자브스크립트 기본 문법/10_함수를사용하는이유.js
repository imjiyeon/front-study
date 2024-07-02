// 부가세 계산하기

let salePrice = 100000; // 매출
let vat = 0.1; // 부가세 10%
let tax = salePrice * vat;
console.log(tax);

let salePrice2 = 240000; // 매출
let vat2 = 0.1; // 부가세 10%
let tax2 = salePrice2 * vat2;
console.log(tax2);

let salePrice3 = 940000; // 매출
let vat3 = 0.1; // 부가세 10%
let tax3 = salePrice3 * vat3;
console.log(tax3);

// 법이 바뀌어서 부가세가 10%에서 12%로 인상됨
// 그래서 vat 부분을 모두 수정해야함

// 부가세를 계산하는 함수 만들기
function calculateTax(salePrice) {
  let vat = 0.12; // 이부분만 한번 변경하면 됨
  let tax = salePrice * vat;
  console.log(tax);
}

calculateTax(100000);
calculateTax(240000);
calculateTax(940000);
