// 함수
// 학생 객체 배열을 입력 받아, 특정 과목의 평균 점수를 출력하는 함수를 만드세요

// 매개변수: 학생배열, 과목명
function calculateScore(students, subject) {
  // 총 점수
  let totalScore = 0;

  // 모든 학생의 해당 과목 점수를 누적
  // for-of문은 배열에서 값을 하나씩 꺼낼 때 사용
  for (const student of students) {
    // 객체에서 key를 사용해 점수 꺼내기
    // 1. object.key
    // 2. object["key"]
    totalScore = totalScore + student[subject];
  }

  // 평균 점수 계산 (총점 / 학생 수)
  return totalScore / students.length;
}

const students = [
  { name: "둘리", math: 90, english: 85 },
  { name: "또치", math: 80, english: 95 },
  { name: "도우너", math: 70, english: 75 },
];

// math 과목의 평균 점수 구하기
let result = calculateScore(students, "math");
console.log(result);

