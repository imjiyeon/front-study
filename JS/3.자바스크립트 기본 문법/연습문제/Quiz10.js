// 함수
// 숫자 배열을 입력 받아, 배열에서 가장 큰 숫자를 반환하는 함수를 만드세요.

// -1 5 => max:5
// 5 10 => max:10
// 10 -3 => max:10

// arr[0] arr[1]
// max arr[2]
// max arr[3]

// 매개변수: 숫자 배열
// 리턴값: 제일 큰 값
function findMax(arr) {

  // 제일 큰값을 저장할 변수
  // 초기값은 첫번째 요소
  let max = arr[0];

  // 배열의 요소들과 max를 비교
  for (let i = 1; i <= 3; i++) {
    if (arr[i] > max) {
      max = arr[i]; // 더 큰값이 있으면 max 교체
    }
  }
  // 모든 요소를 비교한 후에 제일 큰값을 찾아서 리턴
  return max;
}

let result = findMax([-1, 5, 10, -3]);
console.log(result); //10