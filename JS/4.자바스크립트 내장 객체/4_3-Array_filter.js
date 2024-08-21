var persons = [
  {
    name: "유재석",
    point: 78,
    city: "서울",
  },
  {
    name: "김종국",
    point: 92,
    city: "서울",
  },
  {
    name: "양세찬",
    point: 76,
    city: "제주",
  },
  {
    name: "하하",
    point: 81,
    city: "서울",
  },
];

// filter: 조건을 만족하는 요소들만 모아 새 배열을 반환
// 인자: 조건을 정의하는 함수
// person: 배열의 각 요소

//점수가 80점 이상인 사람들만 반환
var pass = persons.filter(function (person) {
  return person.point > 80;
});
console.log(pass);

// 화살표함수로 변경하면 더 깔끔!
var pass2 = persons.filter((person) => person.point > 80);
console.log(pass2);

// 계산 과정
// 1. person = { name: "유재석", point: 78, city: "서울" }
//    조건 평가: 78 > 80 -> false (포함되지 않음)
// 2. person = { name: "김종국", point: 92, city: "서울" }
//    조건 평가: 92 > 80 -> true (포함됨)
// 3. person = { name: "양세찬", point: 76, city: "제주" }
//    조건 평가: 76 > 80 -> false (포함되지 않음)
// 4. person = { name: "하하", point: 81, city: "서울" }
//    조건 평가: 81 > 80 -> true (포함됨)
