// OBJECT 객체

//빈 객체 생성
let person = new Object();

//멤버 설정
person.firstName = "고";
person.lastName = "길동";
person.age = 30;

person.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(person.getFullName());
