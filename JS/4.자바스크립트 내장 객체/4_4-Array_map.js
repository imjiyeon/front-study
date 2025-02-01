//map: 배열의 각 요소를 변환하여 새 배열 생성
//배열의 모든 숫자에 2 곱하기

var arr = [1,2,3,4,5];
var newArr = arr.map(function (num) {
  return num * 2;
});
console.log("모든 숫자에 2 곱하기: ", newArr); // [2, 4, 6, 8, 10]

//성과 이름을 연결하여 fullName 속성 추가
var userList = [
  {
    firstName: "재석",
    lastName: "유",
    email: "yu@gmail.com",
  },
  {
    firstName: "종국",
    lastName: "김",
    email: "kim@gmail.com",
  },
  {
    firstName: "세찬",
    lastName: "양",
    email: "yang@gmail.com",
  },
  {
    firstName: "석진",
    lastName: "지",
    email: "ji@gmail.com",
  },
];

var newList = userList.map(function (user) {
  return {
    fullName: user.lastName + user.firstName,
    email: user.email,
  };
});

console.log(newList);

// 계산 과정
// 1. user = { firstName: "재석", lastName: "유", email: "yu@gmail.com" }
//    변환 결과: { fullName: "유재석", email: "yu@gmail.com" }
// 2. user = { firstName: "종국", lastName: "김", email: "kim@gmail.com" }
//    변환 결과: { fullName: "김종국", email: "kim@gmail.com" }
// 3. user = { firstName: "세찬", lastName: "양", email: "yang@gmail.com" }
//    변환 결과: { fullName: "양세찬", email: "yang@gmail.com" }
// 4. user = { firstName: "석진", lastName: "지", email: "ji@gmail.com" }
//    변환 결과: { fullName: "지석진", email: "ji@gmail.com" }
