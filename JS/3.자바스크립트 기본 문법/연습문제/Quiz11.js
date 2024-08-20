// 함수
// 배열을 입력 받아, 모두 같은 자료형으로 이루어져 있는지 확인하는 함수를 만드세요.

function func(arr) {
  // 첫 번째 요소의 자료형을 기준으로 설정
  let firstType = typeof arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== firstType) {
      return false; // 하나라도 다른 자료형이 있으면 false 반환
    }
  }

  return true; // 모두 동일한 자료형이면 true 반환
}

console.log(func([1, 2, 3])); // true
console.log(func([1, "2", 3])); // false
console.log(func(["a", "b", "c"])); // true
console.log(func([true, false, true])); // true
