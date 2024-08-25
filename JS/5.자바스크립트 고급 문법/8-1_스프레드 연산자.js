// 배열을 분해해서 사용하기

//배열
let arr = [1, 2, 3];
console.log(arr); //[1, 2, 3]
console.log(...arr); // 1 2 3

//문자열
let str = "안녕하세요";
console.log(str); //안녕하세요
console.log(...str); // 안 녕 하 세 요

//객체 복사하기1
let obj = { name: "신짱구", gender: "남자" };
let copyObj = { ...obj }; // 객체를 분해한 후 새로운 객체 생성
obj.name = "신짱아"; //원본 수정
console.log(copyObj); //영향 없음

//객체 복사하기2
let copyObj2 = obj; // 주소를 복사
obj.name = "신형만"; //원본 수정
console.log(copyObj2); //영향 있음

// 두 개의 배열의 모든 요소를 하나로 합치기
var arr1 = [4, 5, 6];
var arr2 = [1, 2, 3];
var arr3 = [...arr2, ...arr1];
console.log(arr3);

// 문자열을 분해해서 배열에 합치기
var cd = "CD";
var abcd = ["A", "B", ...cd];
console.log(abcd);
