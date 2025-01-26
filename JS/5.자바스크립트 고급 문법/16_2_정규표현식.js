// 원본 문자열
const str = "Hello World! world!";

//정규표현식 객체 생성하는 두가지 방법 
const regex = /World/;
const regex2 = new RegExp("World");

// 'World'라는 문자열이 있으면 추출
console.log(regex.exec(str)); // true

// 'World'라는 문자열이 있는지 확인
console.log(regex.test(str)); // true

// search: 매치되는 문자열이 발견되면 인덱스 번호 반환
// 'World'라는 문자열의 위치 확인
console.log(str.search(regex)); // 6