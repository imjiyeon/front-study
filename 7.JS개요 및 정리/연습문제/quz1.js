// Q2. 다음사람 객체의 나이,이름,주소를 수정하여 다음과 같이 결과를 출력하세요

// 결과:
// 10
// 또치
// 인천

// 정답
const person = {
    age : 30,
    name : "둘리",
    address : "서울"
}

person.age = 10;
person.name = '또치';
person.address = '인천';
console.log(person.age);
console.log(person.name);
console.log(person.address);

// person["age"] = 10;
// person["name"] = '또치';
// person["address"] = '인천';
// console.log(person["age"]);
// console.log(person["name"]);
// console.log(person["address"]);