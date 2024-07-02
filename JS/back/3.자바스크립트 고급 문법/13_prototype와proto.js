//함수는 프로퍼티를 가질 수 있음
function person(name, age) {
    this.name = name;
    this.age = age;
}
//프로토타입에 프로퍼티 추가
person.prototype.hair = 'black'; 
let kim  = new person('김',20); //객체 생성
let park = new person('박',30);

// person의 프로토 객체는 한번만 생성됨
// 자식인 kim과 park이 공유해서 사용함
console.log(kim.name);
console.log(kim.age);
console.log(kim.hair); //객체에 프로퍼티가 없으면 부모로 가서 찾음

console.log(park.name);
console.log(park.age);
console.log(park.hair); //객체에 프로퍼티가 없으면 부모로 가서 찾음

// 프로토타입 출력하기
console.log(person.prototype);
console.log(kim.__proto__);