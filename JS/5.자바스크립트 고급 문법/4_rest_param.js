// ...파라미터: rest parameter
// 나머지 데이터가 배열로 저장됨. 개수는 상관없음
function func(one, two, ...rest) {
  // one에 1, two에 2, 나머지는 rest에 배열로 저장됨
  console.log(rest);
}
func(1, 2, 3, 4, 5); // [ 3, 4, 5 ]

// rest parameter는 반드시 마지막 위치에 있어야함
// 잘못된 예시
// function func2 (one, ...rest, two) {
//    console.log(rest)
// }

// rest parameter를 이용하여 숫자들의 합 구하기
function sum(...arr) {
  var total = 0;
  for (var x of arr) {
    total += x;
  }
  console.log(total);
}

sum(1, 2, 3, 4, 5);
