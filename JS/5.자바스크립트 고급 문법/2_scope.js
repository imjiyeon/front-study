//local scope: 함수 내에 선언된 변수는 함수 안에서만 사용 가능
function myFunction() {
  let carName = "볼보";
  console.log(carName);
}

myFunction();

//console.log(carName); //에러남

//global scope: 함수 밖에 선언된 변수는 어디서나 사용 가능
var carName2 = "기아";

function myFunction2() {
  console.log(carName2);
}

myFunction2();
