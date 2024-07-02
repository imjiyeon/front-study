// 숫자를 문자로 변환하는 함수
let num1 = 123;
let str = num1.toString(); //문자열123
console.log(typeof num1);
console.log(typeof str);

// 소수점 몇번째자리까지 보여줄지 결정하는 함수. 해당위치에서 반올림한 값을 반환
let num2 = 10.656;
console.log(num2.toFixed(0)); //11
console.log(num2.toFixed(2)); //10.66

// 정수와 소수를 포함해서 몇번째자리까지 보여줄지 결정하는 함수
console.log(num2.toPrecision()); //10.656
console.log(num2.toPrecision(2)); //11
console.log(num2.toPrecision(4)); //10.66

//문자열에서 숫자로 변환하는 함수
console.log(parseInt("-10"), typeof parseInt("-10")); //-10 number
console.log(parseInt("12.33")); //12
console.log(parseInt("10 years")); //10. 문자열의 시작이 숫자면, 숫자부분만 변환
console.log(parseInt("years 10")); //NaN

//문자열에서 실수로 변환하는 함수
console.log(parseFloat("10"), typeof parseFloat("10")); //-10 number
console.log(parseFloat("12.33")); //12.33
