// 배열을 분해해서 사용하기

var arr1 = [4, 5, 6];
var arr2 = [1, 2, 3];
var arr3 = [...arr2, ...arr1]; // 배열을 분해해서 새로운 배열에 넣기
console.log(arr3);

var cd = "CD";
var alphabet = ["A", "B", ...cd];
console.log(alphabet);
