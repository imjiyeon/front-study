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

//map: 배열의 각 요소를 변환하여 새 배열을 만듬
//각 요소(user)를 새로운 객체로 변환

var newList = userList.map(function (user) {
  //성과 이름을 연결하여 fullName 속성 추가
  return {
    fullName: user.lastName + user.firstName,
    email: user.email
  };
});

console.log(newList);
