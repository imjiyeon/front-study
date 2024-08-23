/*배열문제*/

//상품 목록 배열
const products = [
  { name: "스마트폰", price: 799000, category: "전자제품" },
  { name: "노트북", price: 1200000, category: "전자제품" },
  { name: "헤드폰", price: 150000, category: "전자제품" },
  { name: "키보드", price: 100000, category: "액세서리" },
  { name: "마우스", price: 50000, category: "액세서리" },
  { name: "충전기", price: 30000, category: "액세서리" },
  { name: "블루투스 스피커", price: 90000, category: "전자제품" },
];
console.log("원본 상품 목록:", products);

//가격을 기준으로 오름차순 정렬하기
products.sort((a, b) => a.price - b.price); // 앞 물건의 가격이 더 크면 교체
console.log("정렬된 상품 목록:", products);

// 가격과 카테고리 기준으로 필터링하기
// 가격이 50,000 원 이상 500,000 원 이하인 상품만 포함
// 카테고리가 "전자제품"인 상품만 포함
const filteredProducts = products.filter(
  (product) =>
    product.price >= 50000 &&
    product.price <= 500000 &&
    product.category === "전자제품"
);
console.log("필터링된 상품 목록:", filteredProducts);

//상품 객체 변환하기
//가격을 한국 원화 형식(예: "₩1000")으로 변환
const formattedProducts = filteredProducts.map((product) => {
  return {
    name: product.name,
    formattedPrice: `₩${product.price}`, //또는 "₩" + product.price
    category: product.category,
  };
});
console.log("포맷된 상품 목록:", formattedProducts);
