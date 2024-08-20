// 함수
// 문자열 배열과 특정 문자열을 입력 받아, 특정값이 있는지 확인하고 있으면 true 없으면 false를 반환하는 함수를 만드세요.

function func(arr, value) {
  return arr.includes(value);
}

console.log(func(["apple", "banana", "cherry"], "banana")); // true
console.log(func(["apple", "banana", "cherry"], "grape")); // false
