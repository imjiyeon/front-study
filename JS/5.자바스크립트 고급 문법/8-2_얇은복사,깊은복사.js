// 여러가지 방법으로 객체 복사하기

let obj = { name: "짱구", age: 5 };

// 얕은 복사: 단순히 객체 복사
let copyObj = obj; // obj의 참조 주소가 copyObj로 복사됨
copyObj.name = "훈이";

console.log(obj); //copyObj 객체로 이름을 변경하면, 원본 객체의 이름도 변경됨
console.log(copyObj);

// 스프레드 연산자를 사용한 얕은 복사: 새로운 객체를 생성
let copyObj2 = { ...obj };
copyObj2.name = "짱아";

//copyObj2 객체는 별도의 객체라서 원본 객체는 영향을 받지 않음
console.log(obj);
console.log(copyObj2);

// 복잡한 객체 복사하기 (객체 안에 객체가 있는 경우)
let origin = {
  name: "짱구",
  age: 5,
  favoriteFood: {
    first: "햄버거",
    second: "피자",
  },
};
let copy = { ...origin }; // 스프레드 연산자로 복사

copy.favoriteFood.first = "마라탕";
console.log(origin.favoriteFood); //copy.favoriteFood로 first를 변경하면, 원본객체의 first도 변경됨
console.log(copy.favoriteFood);

// 이유: favoriteFood 객체도 참조타입이기 때문에, 스프레드 연산자를 사용해도 동일한 주소가 복사됨

// 깊은 복사: 객체를 완벽하게 복사하기
//stringify() 함수를 사용하여 객체를 JSON문자열로 변환
//이 과정에서 모든 참조 객체가 값으로 변환됨
let copy2 = JSON.stringify(origin);

//parse() 함수를 사용하여 다시 객체로 변환
//이때 완전히 새로운 객체가 생성됨
let deepCopy = JSON.parse(copy2);

deepCopy.favoriteFood.first = "탕후루";
console.log(origin.favoriteFood); //deepCopy를 변경해도 원본데이터는 영향이 없음
console.log(deepCopy.favoriteFood);
