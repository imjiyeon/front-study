// 학생 목록
const students = [
  { name: "김철수", score: 85, grade: "1학년" },
  { name: "이영희", score: 92, grade: "2학년" },
  { name: "박지훈", score: 76, grade: "3학년" },
  { name: "최유리", score: 88, grade: "1학년" },
  { name: "정민호", score: 54, grade: "1학년" },
  { name: "한서연", score: 63, grade: "2학년" },
  { name: "장동건", score: 71, grade: "3학년" },
  { name: "오지호", score: 80, grade: "3학년" },
];

// 성적에 따라 등급 추가하기
const mapList = students.map((student) => {

  // 성적을 계산하여 객체에 등급을 추가
  if (student.score >= 90) {
    student.level = "A";
  } else if (student.score >= 70) {
    student.level = "B";
  } else {
    student.level = "C";
  }
  // 학생의 이름, 점수, 학년은 그대로이고 등급만 추가됨
  // 기존의 객체를 반환
  return student;
});
console.log("등급이 추가된 학생 목록:", mapList);

//성적을 기준으로 내림차순 정렬하기 (생략)
// const sortList = mapList.sort((a, b) => b.score - a.score);
// console.log("정렬된 학생 목록:", sortList);

// 1학년이고 등급이 "B"인 학생 찾기
const filterList = mapList.filter(
  (student) => student.level === "B" && student.grade == "1학년"
);
console.log("필터링된 학생 목록:", filterList);

// 점수 총합 구하기
// reduce함수에서 초기값 설정하기
// 초기값이 없으면 배열의 첫번째 요소로 설정됨
var sum = filterList.reduce(function (total, student) {
  return total + student.score;
}, 0);

console.log("1학년 중 등급이 'B'인 학생들의 점수 총합:", sum);
