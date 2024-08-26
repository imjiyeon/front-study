//문자열 안에서 변수 삽입하기
//문자열 "Hello "와 변수 nm을 연결하여 "Hello John" 출력
//``(백틱)으로 감싼 문자열 안에서 ${}를 사용해 변수를 삽입할 수 있다.
var nm = "John";
console.log(`Hello ${nm}`); // "Hello John" 출력

// 변수 여러개를 문자열에 삽입하기
var firstName = "Jane";
var lastName = "Doe";
console.log(`My name is ${firstName} ${lastName}`); // "My name is Jane Doe" 출력

// 문자열 안에서 계산식 사용하기
var a = 5;
var b = 10;
console.log(`${a} + ${b} = ${a + b}`); 
// "The sum of 5 and 10 is 15." 출력
