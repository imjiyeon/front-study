// 객체를 분해해서 필요한 데이터만 추출하기

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 37,
  email: "john@gmail.com",
  city: "New York",
  country: "USA",
};

//object에서 해당키만 추출해서 새로운 object 생성
var { firstName, lastName } = person;
console.log(firstName);
console.log(lastName);

//전달받은 object에서 필요한 데이터만 추출
function displayFullName({ firstName, lastName }) {
  console.log(`${firstName} ${lastName}`); //John Doe
}

displayFullName(person); //함수 호출 시 Object를 파라미터 값으로 전달
