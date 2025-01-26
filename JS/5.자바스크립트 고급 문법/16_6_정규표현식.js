// 우편번호 형식에 맞는지

// ^는 문자열의 시작, \d는 숫자, {5}는 앞의 패턴이 5번 반복되는 것을 의미
// $는 패턴이 끝나는 것을 의미
// 반드시 숫자로 시작하고 숫자는 5개 
let patt = /^\d{5}$/; 
let postalcode = "23452";
console.log(patt.test(postalcode));
postalcode = "1234";
console.log(patt.test(postalcode));

// 전화번호 형식에 맞는지
// 010으로 시작해야함
// - 하이픈은 그대로 포함되어야 함
// 숫자 4개가 연속으로 나타남
// 다시 하이픈이 나타나고 숫자 4개로 끝나야함
// 숫자 4개가 반복되고 종료
patt = /^(010)-\d{4}-\d{4}$/;
let tel = "010-2312-3354";
console.log(patt.test(tel));
tel = "01023123354";
console.log(patt.test(tel));

// 이메일 형식에 맞는지
// [a-zA-Z]+: 하나 이상의 알파벳
// \d*: 숫자가 0개 이상
// \.?: 점(.) 문자가 0개 또는 1개
// \w+: 하나 이상의 문자(알파벳, 숫자, 밑줄)
// @ 문자는 그대로 포함되어야 함
// \w{2,3}+: 2~3개의 문자
let regexp = /^([a-zA-Z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
let email = "jeremy2021.go@gmail.com";
console.log(regexp.test(email));
email = "test@gmail.com";
console.log(regexp.test(email));
email = "testgmail.com";
console.log(regexp.test(email));