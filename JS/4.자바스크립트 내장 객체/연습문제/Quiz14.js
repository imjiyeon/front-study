// 학생 정보 map 생성
const students = new Map();

// 6명의 학생 정보 추가
// key-string value-object
students.set("김민준", { grade: "2학년", major: "컴퓨터공학" });
students.set("이서윤", { grade: "3학년", major: "경영학" });
students.set("박지호", { grade: "1학년", major: "물리학" });
students.set("최지민", { grade: "4학년", major: "화학" });
students.set("정예린", { grade: "2학년", major: "수학" });
students.set("한지우", { grade: "3학년", major: "영어영문학" });

// 연락처 전체 출력
console.log("학생 목록:");
for (let [name, info] of students) {
  console.log(`${name}: ${info.grade}, ${info.major}`);
}
console.log();

// 학년이 3학년인 학생들의 전공을 "융합공학"으로 변경
for (let [name, info] of students) {
  if (info.grade === "3학년") {
    students.set(name, { grade: info.grade, major: "융합공학" });
  }
}
console.log("3학년 학생들의 전공을 융합공학으로 변경했습니다.");
console.log();

// 학생 정보 검색
const searchName = "정예린";
if (students.has(searchName)) {
  const info = students.get(searchName);
  console.log(`${searchName}: ${info.grade}, ${info.major}`);
} else {
  console.log("해당 학생 정보가 없습니다.");
}
console.log();

// 학년별 학생 수 계산
// 학생의 수를 저장하는 새로운 MAP 생성
// KEY: 학년 VALUE: 학생의 수
const gradeCounts = new Map();
for (let [name, info] of students) {
  const grade = info.grade;

  // 기존 값이 없으면 1로 초기화, 있으면 + 1
  if (gradeCounts.has(grade)) {
    let count = gradeCounts.get(grade);
    gradeCounts.set(grade, count+1);
  } else {
    gradeCounts.set(grade, 1);
  }
}

console.log("학년별 학생 수:");
for (let [grade, count] of gradeCounts) {
  console.log(`${grade}: ${count}명`);
}
