// String 객체의 메소드
// match: 주어진 문자열에서 특정 패턴을 찾는 함수
let patt = /a/;
console.log('abcde'.match(patt));

// 옵션

// i: 대소문자를 구분하지 않겠다는 의미
const xi = /a/;
console.log('ABCDE'.match(xi));

const oi = /a/i;
console.log('ABCDE'.match(oi));

// g: 패턴에 해당하는 모든 문자를 추출하겠다는 의미
const xg = /a/;
console.log('abcdea'.match(xg));

const og = /a/g;
console.log('abcdea'.match(og));

//
const ig = /a/ig;
console.log('Abcdea'.match(ig));
