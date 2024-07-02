//sort: 배열의 요소를 정렬하는 함수
//문자형 데이터는 오름차순으로 정렬
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

//두수를 비교하는 함수 function()을 인자로 전달
//a, b: 배열의 첫번째요소와 두번째요소
var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  //두수를 비교해서 양수가 나오면 위치를 바꿈 -> 오름차순으로 정렬
  return a - b;
});
console.log(points);

var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  //두수를 비교해서 음수가 나오면 위치를 바꿈 -> 내림차순으로 정렬
  return b - a;
});
console.log(points);

//sort: 별도의 함수가 없으면 순정렬
//reverse: 역정렬
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);

//객체의 특정 프로퍼티를 기준으로 정렬
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

//두수를 비교해서 뒷 숫자가 더 크면 바꿈 -> 내림차순
persons.sort(function (a, b) {
  return a.point < b.point ? 1 : -1;
});

console.log(persons);
