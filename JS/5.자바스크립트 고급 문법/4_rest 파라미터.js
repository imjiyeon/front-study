// rest 파라미터: 나머지 파라미터로, 나머지 데이터가 배열로 저장됨
// one에 1, two에 2, 나머지는 rest 배열에 저장됨
function func(one, two, ...rest) {
  console.log(rest); //[3, 4, 5]
}
func(1, 2, 3, 4, 5);

// 잘못된 예시
// rest parameter는 반드시 마지막 위치에 있어야함
// function func2 (one, ...rest, two) {
// }

// rest 파라미터를 이용하여 숫자들의 합 구하기
// rest 파라미터는 전달되는 인자의 개수와 상관없이 모든 인자를 배열로 수집할 수 있음
function sum(...arr) {
  let total = 0;
  // 배열을 순회하며 합계 구하기
  for (let x of arr) {
    total += x;
  }
  console.log(total); //합계
}

sum(1, 2, 3, 4, 5);
sum(1, 2, 3);
