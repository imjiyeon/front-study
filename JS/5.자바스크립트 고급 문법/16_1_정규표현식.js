// 정규표현식: 문자열에 포함된 특정 문자 조합을 찾기 위해 사용되는 패턴

// 정규표현식을 만드는 두가지 방법
const regex = /a/;
const regex2 = new RegExp("a"); //위와 같음

// 우리가 찾는 텍스트가 있으면 추출됨
console.log(regex.exec('abcde')); //['a']
console.log(regex.exec('bcde')); //null

// 우리가 찾는 텍스트가 있는지 없는지 확인
console.log(regex.test('abcde')); //true
console.log(regex.test('bcde')); //false

// a뒤에 있는 문자하나까지 찾기
const regex3 = /a./;
console.log(regex3.exec('abcde')); //['ab']