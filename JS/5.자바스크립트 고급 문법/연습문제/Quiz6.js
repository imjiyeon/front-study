// 상품들의 가격을 계산하는 프로그램을 만들어주세요
// 여러 상품을 인자로 입력받아, 평균 가격을 반환하는 함수를 정의하세요
// 각 상품의 할인율을 적용하여 최종가격을 계산해야 합니다
// 예: 새우깡의 최종가격: 1500 * 0.9 = 1350원

function calculateAveragePrice(...products) {
  // 상품들의 최종 가격의 합계 계산
  let sum = products.reduce((total, product) => {
    let finalPrice = 0;
    // 할인률이 있으면 할인 적용, 없으면 원래 가격 적용
    if (typeof product.discount == "undefined") {
      finalPrice = product.price;
    } else {
      finalPrice = product.price * (1 - product.discount / 100);
    }
    return total + finalPrice;
  }, 0);

  let count = products.length;

  // 평균 가격 계산
  return (sum / count).toFixed(2);
}

function showProducts(...products) {
  console.log("상품 목록:");
  products.forEach((product) => console.log(product));
  console.log();
}

const product1 = { name: "새우깡", price: 1500, discount: 10 };
const product2 = { name: "홈런볼", price: 2000, discount: 5 };
const product3 = { name: "포카칩", price: 2500 };
const product4 = { name: "칙촉", price: 3000, discount: 15 };
const product5 = { name: "오잉", price: 1800 };

showProducts(product1, product2, product3, product4, product5);

const avgFinalPrice1 = calculateAveragePrice(product1, product2, product3);
const avgFinalPrice2 = calculateAveragePrice(product1, product2, product3, product4, product5);

console.log(`새우깡, 홈런볼, 포카칩의 평균 가격은 ${avgFinalPrice1}원 입니다.`);
console.log(`전체 평균 가격은 ${avgFinalPrice2}원 입니다.`);
