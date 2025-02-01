// 정규표현식을 시각화 해주는 사이트
// https://regexper.com/

// /w: 문자를 의미. A~Z a~z 0~9 
// +: 문자 하나이상
const patt = /(\w+)/;
console.log(patt.test('a')); //true
console.log(patt.test('aa')); //true

// /s: 빈문자열
const patt2 = /(\w+)\s(\w+)/;
console.log(patt2.test('a bc')); //true
console.log(patt2.test('abc de')); //true
console.log(patt2.test('abcde')); //false
