// rest 파라미터 활용

// 특정과목의 이름과 학생들을 인자로 받아서, 특정 과목의 평균점수을 구하는 함수를 정의한다.
// 만약 특정 과목의 점수를 없으면 계산하지 않고, 건너뛴다.
// 예: 맹구와 유리의 수학과목의 평균점수: (80)/1 = 80

// 매개변수: 과목과 학생들
// 전달되는 학생의 수가 가변적이므로 나머지 파라미터를 사용한다
function calculateAverageScore(subject, ...students) {
  // 해당 과목의 점수가 있는 학생만 필터링
  // 과목명은 객체의 키로 동적으로 접근

  // 배열의 filter 함수를 사용하여 특정 과목의 점수만 추출
  let filterStudents = students.filter(function (student) {
    return typeof student[subject] != "undefined";
  });

  // 점수의 총합 계산
  let sum = filterStudents.reduce(function (total, student) {
    return total + student[subject];
  }, 0);

  let count = filterStudents.length;

  // 평균점수 계산
  return (sum / count).toFixed(1);
}

function showStudents(...students) {
  console.log("학생 목록:");
  students.forEach((student) => console.log(student));
  console.log();
}

const student1 = { name: "짱구", eng: 80, math: 50, kor: 70 };
const student2 = { name: "철수", eng: 90, math: 85, kor: 88 };
const student3 = { name: "훈이", eng: 75, math: 95, kor: 92 };
const student4 = { name: "맹구", eng: 65 };
const student5 = { name: "유리", math: 80, kor: 90 };

showStudents(student1, student2, student3, student4, student5);

const engAvg = calculateAverageScore("eng", student1, student2, student3, student4);
const mathAvg = calculateAverageScore("math", student4, student5);
const korAvg = calculateAverageScore("kor", student1, student2, student3, student4, student5);

console.log(`짱구, 철수, 훈이, 맹구의 영어과목의 평균점수는 ${engAvg}점 입니다`); //77.5
console.log(`맹구와 유리의 수학과목의 평균점수는 ${mathAvg}점 입니다`); //80.0
console.log(`국어과목의 전체 평균점수는 ${korAvg}점 입니다`); //85.0
