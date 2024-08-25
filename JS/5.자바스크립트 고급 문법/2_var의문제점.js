//let 또는 const로 변수를 선언했을 때
if (true) {
  const num1 = 100;
}
//console.log(num1); //에러남. 지역변수는 블록스코프 밖에서 사용할 수 없음

//var로 변수를 선언했을 때
if (true) {
  var num2 = 200;
}
console.log(num2); //에러가 안남.. 정상적으로 출력됨

function func() {
  var num3 = 300;
}
console.log(num3); //에러남. 지역변수는 함수스코프 밖에서 사용할 수 없음

//var는 함수 스코프만 따르고, 블록 스코프를 무시하기 때문에
//블록 스코프에서는 전역변수와 지역변수를 구분할 수 없음
//따라서 var 키워드는 스코프(유효범위) 문제로 인해 사용하는 것을 권장하지 않음
