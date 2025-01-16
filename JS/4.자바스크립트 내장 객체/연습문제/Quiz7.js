/*배열문제*/

//학생 목록 배열
const students = [
  { name: "김철수", score: 85, gradeLevel: "1학년" },
  { name: "이영희", score: 92, gradeLevel: "2학년" },
  { name: "박지훈", score: 76, gradeLevel: "3학년" },
  { name: "최유리", score: 88, gradeLevel: "1학년" },
  { name: "정민호", score: 54, gradeLevel: "1학년" },
  { name: "한서연", score: 63, gradeLevel: "2학년" },
  { name: "장동건", score: 71, gradeLevel: "3학년" },
  { name: "오지호", score: 80, gradeLevel: "3학년" },
];

// 성적에 따라 등급 추가하기
const studentsWithGrades = students.map((student) => {

  //먼저 성적을 계산하여 등급을 만들고 객체에 대입
  let grade;
  if (student.score >= 90) {
    grade = "A";
  } else if (student.score >= 70) {
    grade = "B";
  } else {
    grade = "C";
  }

  // 등급 속성을 추가하여 새로운 객체를 반환
  return {
    name: student.name,
    score: student.score,
    gradeLevel: student.gradeLevel,
    grade: grade,
  };
});
console.log("등급이 추가된 학생 목록:", studentsWithGrades);

//성적을 기준으로 내림차순 정렬하기
const sortedStudents = studentsWithGrades.sort((a, b) => b.score - a.score);
console.log("정렬된 학생 목록:", sortedStudents);

//1학년 중 등급이 "B"인 학생들의 점수 총합 구하기
const filteredByGrade = sortedStudents.filter(
  (student) => student.grade === "B" && student.gradeLevel == "1학년"
);
console.log("필터링된 학생 목록:", filteredByGrade);

var sum = filteredByGrade.reduce(function (total, student) {
  return total + student.score;
}, 0);

console.log("1학년 중 등급이 'B'인 학생들의 점수 총합:", sum);
