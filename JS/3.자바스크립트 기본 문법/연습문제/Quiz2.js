// person 객체 만들고 수정하기
const person = {
  name: "둘리",
  age: 30,
  address: "서울",
};

// 도트연산자를 사용하여 이름,나이,주소 변경
person.name = "또치";
person.age = 10;
person.address = "인천";

// 대괄호를 사용하여 이름,나이,주소 변경
person["name"] = '또치';
person["age"] = 10;
person["address"] = '인천';

// product 객체 만들고 수정하기
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
