// 회원
const member = {
  id: "user",
  password: "1234",
  level: "Gold",
  name: "둘리",
  phone: "010-1234-5678",
};

//제품
const product = {
  name: "노트북",
  price: 1200000,
  description: "고성능 게이밍 노트북",
  category: "전자제품",
};

// 주문
const order = {
  productName: "노트북",
  quantity: 1,
  totalPrice: 1200000,
  orderer: "또치",
  orderDate: "2024-08-18",
  shippingAddress: "인천시 남동구",
};

console.log(member);
console.log(product);
console.log(order);
