// 숫자를 문자로 변환하는 함수
let num1 = 123;
let str = num1.toString(); // "123"
console.log(typeof num1); // "number"
console.log(typeof str); // "string"

// 소수점 몇번째자리까지 보여줄지 결정하는 함수. 해당위치에서 반올림한 값을 반환
let num2 = 10.656;
console.log(num2.toFixed(0)); //11 (소수점 0자리까지 보여주고 반올림)
console.log(num2.toFixed(2)); //10.66 (소수점 2자리까지 보여주고 반올림)

// 정수와 소수를 포함해서 몇번째자리까지 보여줄지 결정하는 함수
console.log(num2.toPrecision()); //10.656 (그대로 표시)
console.log(num2.toPrecision(2)); //11 (2자리만큼 표시하고 반올림)
console.log(num2.toPrecision(4)); //10.66 (4자리만큼 표시하고 반올림)

//문자열을 숫자로 변환하는 함수
console.log(parseInt("-10"), typeof parseInt("-10")); //-10 number
console.log(parseInt("12.33")); //12
console.log(parseInt("10 years")); //10 (시작 부분이 숫자면 숫자부분만 변환)
console.log(parseInt("years 10")); //시작 부분에 숫자가 없으면 NaN

//문자열을 실수로 변환하는 함수
console.log(parseFloat("12.33")); //12.33

//isNaN: 문자열이 숫자로 변환가능한지 확인하는 함수
console.log(isNaN("aa")); //true
console.log(isNaN("10")); //false
