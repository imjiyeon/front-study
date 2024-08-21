// 20보다 큰 숫자를 필터링하고 각 요소에 2를 곱합니다.

var arr = [10, 15, 20, 25, 30];

var newarr = arr
  .filter(function (num) {
    return num > 20;
  })
  .map(function (num) {
    return num * 2;
  });

console.log(newarr); // [50, 60]
