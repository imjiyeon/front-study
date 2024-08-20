/* 1. 객체 만들기 */

//빈 객체 생성
let person = new Object();

//객체에 프로퍼티 추가
person.firstName = "고";
person.lastName = "길동";
person.age = 30;

//객체에 함수 추가
person.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

//첫번째 방법은 동적으로 객체를 만들기 좋음..

/* 2. 객체 만들기 */
//위 코드와 동일하게 객체를 만드는 방법
let person2 = {
  firstName: "고",
  lastName: "길동",
  age: 30,
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
