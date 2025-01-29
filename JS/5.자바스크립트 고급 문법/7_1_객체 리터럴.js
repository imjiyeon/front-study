// 변수를 객체의 값으로 사용하기
let name = "둘리";
let age = 20;
let person = {
  pName: name,
  pAge: age
}
console.log(person);
  
// 변수를 객체의 키로 사용하기
var type = "name";
var score = {
  [type]: "도우너", // name: "도우너"
  score: 95,
};
console.log(score);

// 변수를 사용하면 객체의 키를 동적으로 추가할 수 있다
var property = "grade";
score[property] = "A"; // score.grade = A 와 같음
console.log(score);
