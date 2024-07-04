/* 연산자 */

// 대입연산자
let x = 1; // x에 1을 저장

// 비교연산자
console.log(1 == 2); // 값이 같으면 참
console.log(1 != 2); // 값이 다르면 참
console.log(1 > 2);
console.log(1 >= 2);
console.log(1 < 2);
console.log(1 <= 2);

console.log(1 == "1"); // 값만 비교
console.log(1 === "1"); // 값과 자료형이 모두 비교

//산술연산자
console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 / 2);
console.log(10 % 2);

// 부정연산자
console.log(-x); //x의 부호를 반대로 변경하여 음수로 만듬

// 증감연산자
console.log(++x); //X에 1을 더하고 출력
console.log(x++); //X를 먼저 출력하고 1을 더함
console.log(--x); //X에 1을 빼고 출력
console.log(x--); //X를 먼저 출력하고 1을 뺌

// 논리연산자
console.log(true && true); // 모두 참이면 참
console.log(true && false);
console.log(true || true); // 둘 중 하나라도 참이면 참
console.log(true || false);
console.log(!true); // 참이면 거짓, 거짓이면 참을 반환

// 문자열결합연산자
console.log("좋은 " + "하루 되세요!");

//삼항 연산자
let point = 92;
let grade = point >= 90 ? "Pass" : "Fail"; // 점수가 90이상이면 패스 이하면 fail

// typeof 연산자
console.log(typeof "42"); // 'string'
console.log(typeof 42); // 'number'
console.log(typeof 1.123); // 'number'
console.log(typeof true); // 'boolean'
console.log(typeof function () {}); // 'function'
console.log(typeof undefined); // 'undefined'
console.log(typeof null); // 'object'
console.log(typeof {}); // 'object'
console.log(typeof []); // 'object'
