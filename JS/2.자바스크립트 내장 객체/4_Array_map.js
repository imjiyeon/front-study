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

//map: 배열의 요소를 새로운 형태로 변환하는 함수
//배열의 각 요소(user)를 꺼내서, 새로운 object로 변환

var userList2 = userList.map(function (user) {
  //성과 이름을 연결하여 풀네임 프로퍼티 추가
  return {
    fullName: user.lastName + user.firstName,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };
});

console.log(userList2);
