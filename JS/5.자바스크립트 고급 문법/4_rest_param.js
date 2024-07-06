// 파라미터 2개를 가지고 있는 함수
function sum1(x1, x2) {
  var y = x1 + x2;
  console.log(y);
}
sum1(5, 7); //함수를 호출할 때, 인자 2개 전달

// 파라미터 4개를 가지고 있는 함수
function sum2(x1, x2, x3, x4) {
  var y = x1 + x2 + x3 + x4;
  console.log(y);
}
sum2(5, 7, 3, 9); //함수를 호출할 때, 인자 4개 전달

// ....파라미터: 개수와 상관없이 전달
// 파라미터가 배열로 저장됨
function sum(...args) {
  var total = 0;
  for (var x of args) {
    total += x;
  }
  console.log(total);
}

sum(3, 2, 5, 7, 4, 23);
