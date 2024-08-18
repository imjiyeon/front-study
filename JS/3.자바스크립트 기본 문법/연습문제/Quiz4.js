// Q.변수 x가 10보다 크고 20보다 작을 때 X를 출력하는 조건식을 작성하세요
const x = 15;
if (x > 10 && x < 20) {
  console.log(x);
}

// Q.문자열 str의 길이가 5보다 길면 str을 출력하는 조건식을 작성하세요
const str = "Hello, World!";
if (str.length > 5) {
  console.log(str);
}

// Q.객체 person의 나이가 20살 미만이고 성별이 남자이면, "남학생입니다"를 출력하는 조건식을 작성하세요
const person = {
  age: 15,
  genger: "M",
  name: "둘리",
  address: "서울",
};

if (person.age < 20 && person.genger == "M") {
  console.log("남학생입니다");
}

// Q.배열에 숫자 10이 포함되어 있으면 "배열에 10이 있습니다"를 출력하고,
// 없으면 "10이 배열에 없습니다"를 출력하는 조건식을 작성하세요
const arr = [5, 12, 8, 130, 44];

if (arr.includes(10)) {
  console.log("10이 배열에 있습니다");
} else {
  console.log("10이 배열에 없습니다");
}
