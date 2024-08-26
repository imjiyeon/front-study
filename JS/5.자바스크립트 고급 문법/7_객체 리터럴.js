// 변수를 객체의 키로 사용하기
var type = "name";

var score = {
  [type]: "John", // name: "John"
  score: 95,
};

console.log(score);

// 객체의 키를 동적으로 추가하기
var property = "grade";

score[property] = "A"; // score.grade = A 와 같음

console.log(score);
