// 원본 문자열
let str = "Is this all there is";

// match: 주어진 문자열에서 패턴과 일치하는 부분을 찾아 배열로 반환
// 인자: 정규표현식 객체
// g 플래그: 전역 검색 의미
// [hat] 패턴: 'h', 'a', 't' 중 하나를 포함하는 문자를 찾음
let patt = /[hat]/g;
console.log(str.match(patt)); // ["h", "t", "h", "a", "t"]

// i 플래그: 대소문자 상관없이 검색
patt = /[is]/gi;
console.log(str.match(patt));

// 원본 문자열 수정
str = "123abc4523kkk";

//[0-9] 패턴: 0~9까지의 숫자
patt = /[0-9]/g;
console.log(str.match(patt));

// \d 패턴: 숫자를 의미
str = "Give 100"; // 수정
patt = /\d/g;
console.log(str.match(patt));

// n+ 패턴: 문자가 하나이상 연속으로 있는 부분을 의미
str = "Hellooo"; // 수정
patt = /o+/g;
console.log(str.match(patt));

//n* 패턴: 0 혹은 n개
str = "Hellooo World"; // 수정
patt = /lo*/g; //'l' 다음에 'o'가 0개 이상 있는 부분을 의미
console.log(str.match(patt));

//n? 패턴: 0개 이거나 1개
str = "1, 100 or 1000"; // 수정
patt = /10?/g; //'1' 다음에 '0'이 0개 또는 1개 있는 부분을 의미
console.log(str.match(patt));
