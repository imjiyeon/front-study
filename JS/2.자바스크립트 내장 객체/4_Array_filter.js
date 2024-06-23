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

//filter: 조건을 만족하지 않는 요소는 배열에서 제거하는 함수
//배열의 각 요소를 확인하고, 결과가 false라면 배열에서 제거
//조건을 정의한 함수 function()를 인자로 전달
//person: 배열의 현재 요소
var pass = persons.filter(function (person) {
  //점수가 80점 이상인 사람만 반환
  return person.point > 80;
});
