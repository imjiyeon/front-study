//  Q.사람의 정보를 수정하세요

// 결과:
// 10
// 또치
// 인천

// 정답
const person = {
  age: 30,
  name: "둘리",
  address: "서울",
};

// 도트연산자를 사용하여 값 변경
person.age = 10;
person.name = "또치";
person.address = "인천";
console.log(person.age);
console.log(person.name);
console.log(person.address);

// 대괄호를 사용하여 값 변경
// person["age"] = 10;
// person["name"] = '또치';
// person["address"] = '인천';

// Q.물건의 정보를 수정하세요
const product = {
  name: "노트북",
  price: 1500000,
  brand: "삼성",
};

product.price = 2000000;
product.brand = "LG";
console.log(product.name);
console.log(product.price);
console.log(product.brand);
