// Q16. 아래와 같이 사람 객체 person을 생성하고, 변수 property를 선언하세요.
// 그리고 person 객체에 property 변수를 사용하여 속성을 추가하세요.

let person = {
  name: "철수",
  age: 21,
};
console.log(person);

let property = "address";

// 추가
person[property] = "인천 남동구 만수동";
console.log(person);

// Q17. 아래와 같이 변수 두 개를 선언하세요.
//      빈 객체 product를 생성하고, 변수를 사용하여 동적으로 속성을 추가하세요.

let key1 = "productName";
let key2 = "productPrice";

let product = {};
console.log(product);

product[key1] = "필통";
product[key2] = 5000;
console.log(product);
