// 20보다 큰 숫자를 필터링하고, 각 요소에 2를 곱합니다.

//버전1
var arr = [10, 15, 20, 25, 30];
console.log("배열: ", arr);

// 20보다 큰 숫자만 필터링하여 새로운 배열 생성
var newarr1 = arr.filter(function (num) {
    return num > 20;
  });
console.log("필터링된 배열: ", newarr1);

// 필터링된 배열의 각 요소에 2를 곱하여 새로운 배열 생성
var newarr2 = newarr1.map(function (num) {
    return num * 2;
  });
console.log("계산된 배열: ", newarr2);

//버전2
var arr = [10, 15, 20, 25, 30];

// 필터링과 맵핑을 연속적인 체인으로 처리
// filter함수가 배열을 반환하기 때문에, 바로 map() 호출 가능
var newarr = arr
  .filter(function (num) {
    return num > 20;
  })
  .map(function (num) {
    return num * 2;
  });
  
console.log();
console.log("최종 결과: ", newarr); // [50, 60]
