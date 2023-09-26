/* 연산자 */

// 비교연산자
// == vs === 차이
console.log(1 == "1"); // 값만 비교
console.log(1 === "1"); //값과 자료형까지 비교

// typeof 연산자
console.log(typeof '42') // 'string'
console.log(typeof 42) // 'number'
console.log(typeof 1.123) // 'number'
console.log(typeof true) // 'boolean'
console.log(typeof function(){}) // 'function'
console.log(typeof undefined) // 'undefined'
console.log(typeof null) // 'object'
console.log(typeof {}) // 'object'
console.log(typeof []) // 'object'