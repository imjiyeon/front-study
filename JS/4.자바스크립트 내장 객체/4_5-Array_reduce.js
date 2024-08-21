//reduce: 배열에 담긴 요소를 순회하며 누적값을 반환하는 함수
//계산식을 정의한 함수 function()을 인자로 전달
//total: 누적값, currentValue: 배열의 현재 요소
var points = [40, 100, 1, 5, 25, 10];
var sum = points.reduce(function (total, currentValue) {
  //합계 구하기
  return total + currentValue;
}, 0);

console.log(sum);
