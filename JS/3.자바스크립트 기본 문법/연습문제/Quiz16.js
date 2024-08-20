// 함수
// 학생 객체 배열을 입력 받아, 특정 과목의 평균 점수를 출력하는 함수를 만드세요

function calculateScore(students, subject) {
  // 총 점수
  let totalScore = 0;
  // 학생 수
  let length = students.length;

  // 학생 배열을 순회
  for (const student of students) {
    // 학생 객체에서 특정 과목의 점수를 가져옴
    totalScore = totalScore + student[subject];
  }

  // 평균 계산
  return totalScore / length;
}

const students = [
  { name: "둘리", math: 90, english: 85 },
  { name: "또치", math: 80, english: 95 },
  { name: "도우너", math: 70, english: 75 },
];

let result = calculateScore(students, "math");
console.log(result);
