// 함수
// 숫자 배열을 입력 받아, 배열에서 가장 큰 숫자를 반환하는 함수를 만드세요.

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let result = findMax([-1, 5, 10, -3]);
console.log(result); //10
