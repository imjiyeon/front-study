// 정규표현식: 문자열에서 특정 패턴을 찾거나, 추출하기 위한 표현식

// 문자열에 World에 대응되는 문자열을 찾는 패턴 정의
let str = "Hello World! world!";

//정규표현식 객체 생성 방법
const regex = /World/;

const regex2 = new RegExp("World");

// // test: 정규표현식 객체의 함수로, 매치되는 문자열이 있으면 true 반환
// console.log(regex.test(str));

// // search: 매치되는 문자열이 발견되면 인덱스 번호 반환
// console.log(str.search(regex)); // 6

// // match: 주어진 문자열에서 패턴과 일치하는 부분을 찾아 배열로 반환
// // 인자: 정규표현식 객체
// // g 플래그: 전역 검색 의미
// str = "Is this all there is";

// let patt = /[hat]/g; //[hat] 패턴은 'h', 'a', 't' 중 하나를 포함하는 문자를 찾음
// let result = str.match(patt); // 패턴과 일치하는 모든 부분을 찾아 배열로 반환
// console.log(result); // ["h", "t", "h", "a", "t"]

// //i플래그: 대소문자 상관없이 검색
// patt = /[is]/gi;
// result = str.match(patt);
// console.log(result);

// //[0-9] \d
// str = "123abc4523kkk"; // 검색 대상
// patt = /[0-9]/g; // 0~9까지의 숫자 중에서 일치하는 숫자를 찾음
// result = str.match(patt); // str에서 patt 패턴과 일치하는 부분을 찾아 배열로 반환
// console.log(result);

// //\d: 숫자를 의미
// str = "Give 100";
// patt = /\d/g;
// result = str.match(patt);
// console.log(result);

// //n+ 최소한 1개 이상
// str = "Hellooo";
// patt = /o+/g; // o문자가 하나이상 연속으로 있는 부분을 의미
// console.log(str.match(patt));

//n* 0 혹은 n개
str = "Hellooo World";
patt = /lo*/g; //'l' 다음에 'o'가 0개 이상 있는 부분을 의미
console.log(str.match(patt));

//n? 0개 이거나 1개
str = "1, 100 or 1000";
patt = /10?/g; //'1' 다음에 '0'이 0개 또는 1개 있는 부분을 의미
console.log(str.match(patt));

//우편번호 5자리
//32543
patt = /^\d{5}$/; //^는 문자열의 시작, \d는 숫자, {5}는 앞의 패턴이 5번 반복되는 것을 의미
let postalcode = "23452";
console.log(patt.test(postalcode));

//전화번호
//010-2312-3354
patt = /^(010)-\d{4}-\d{4}$/; //^는 문자열의 시작, (010)와 -는 문자 그대로, \d{4}는 숫자가 4개 연속으로 나오는 것, $는 문자열의 끝
let tel = "010-2312-3354";
console.log(patt.test(tel));

//이메일 주소
// ^: 문자열의 시작
// ([a-z]+\d*)+: 알파벳으로 시작하며, 숫자가 0개 이상. 이부분이 한번이상 반복
// [a-z]+: 하나 이상의 소문자 알파벳으로 시작
// \d*: 숫자가 0개 이상
// (\.?\w+)+: 점(.)으로 시작, 그 뒤에 하나 이상의 문자가 올수있음
// \.?: 점(.) 문자가 0개 또는 1개 올 수 있음
// \w+: 하나 이상의 문자(알파벳, 숫자, 밑줄)
// @: 문자 그대로
// \w+: 하나 이상의 문자(알파벳, 숫자, 밑줄)
// (\.\w{2,3})+: 점(.)으로 시작, 그 뒤에 두 개 또는 세 개의 문자(알파벳)
// $: 문자열의 끝
let regexp_email = /^([a-zA-Z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
console.log(regexp_email.test("jeremy2021.go@gmail.com"));
