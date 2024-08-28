// 객체를 분해해서 필요한 데이터만 추출하기
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 37,
  email: "john@gmail.com",
  city: "New York",
  country: "USA",
};

//필요한 키만 추출해서 새로운 변수에 저장
//객체는 분해할 때는 {} 중괄호를 사용
let { firstName, lastName } = person;
console.log(firstName); //John
console.log(lastName); //Doe

// 객체에 없는 키를 사용하면 undefined가 반환됨
// let { firstName, aa } = person;
// console.log(aa); //aa는 undefined

// 변수명을 바꿔서 추출하고 싶을 때는 이렇게 작성
let { firstName: fName, lastName: lName } = person;
console.log(fName); // John
console.log(lName); // Doe

// 기본값을 설정하여 객체에 없는 키를 처리
let { address = "주소없음" } = person;
console.log(address); // 주소없음

//사람의 나이와 이메일만 함수에 입력하기
function func1(ag, em){
  console.log(ag + "," + em);
}

func1(person.age, person.email);

// 함수에서 전달받은 객체에서 필요한 데이터만 추출
function func2({ age, email }) {
  console.log(`${age}, ${email}`); //37, john@gmail.com
}

func2(person); //함수 호출 시 Object를 파라미터로 전달
