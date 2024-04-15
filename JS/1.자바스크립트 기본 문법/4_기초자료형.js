/* 기초자료형 */

//String (문자열)
const myName = "둘리"; //큰 따옴표
const email = "user@naver.com"; //작은 따옴표
const hello = `Hello ${myName}`; //백틱. ${} 기호를 사용해서 문자열에 변수를 포함시킴
console.log(myName);
console.log(email);
console.log(hello);

//Number (숫자)
const number = 123; //정수
const opacity = 0.57; //실수
console.log(number);
console.log(opacity);

//Boolean (~ 여부, 논리형)
let checked = true;
let isShow = false;
console.log(checked);
console.log(isShow);

//undefined (아무것도 정의되지 않은 상태)
let undef; //값을 대입하지 않으면 undefined가 자동으로 할당됨
console.log(undef);

//null (값이 비어있음을 의미)
let name = null; //undefined와 달리 개발자가 직접 값을 대입해야 함
console.log(name);
