// 객체를 분해해서 필요한 데이터만 추출하기

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 37,
  email: "john@gmail.com",
  city: "New York",
  country: "USA",
};

//객체에서 해당키만 추출해서 새로운 객체 생성
//객체는 분해시 {} 중괄호 사용
let { firstName, lastName } = person;
console.log(firstName);
console.log(lastName);

// 객체에 없는 키 사용하면 분해가 제대로 안됨
// let { firstName, aa } = person;
// console.log(aa); //aa는 undefined

// 이름을 바꿔서 대입하고 싶으면 이런식으로 작성
let { firstName: fName, lastName: lName } = person;
console.log(fName);
console.log(lName);

//전달받은 object에서 필요한 데이터만 추출
function displayFullName({ firstName, lastName }) {
  console.log(`${firstName} ${lastName}`); //John Doe
}

displayFullName(person); //함수 호출 시 Object를 파라미터 값으로 전달
