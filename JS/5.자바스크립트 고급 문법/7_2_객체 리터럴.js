// 변수를 키로 사용하여 자동차 객체를 생성한다

let key1 = "make";
let key2 = "model";
let key3 = "year";

let car = {
  [key1]: "현대",
  [key2]: "쏘나타",
  [key3]: 2021,
};

console.log(car);