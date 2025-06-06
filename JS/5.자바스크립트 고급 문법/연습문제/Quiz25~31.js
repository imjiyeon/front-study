//25. 문자열 "I have 2 apples and 3 oranges."에서 숫자(0-9)를 모두 찾아 배열로 반환하세요.
let str1 = "I have 2 apples and 3 oranges."; //검색 대상

//0 ~ 9 범위는 대괄호 [] 사용
//0 ~ 9 숫자를 찾아서 배열로 반환 
let numbers = str1.match(/[0-9]/g); 
console.log(numbers); // ["2", "3"]

// const regex1 = /[0-9]/g;
// const regex2 = /\d/g;

// console.log(str.match(regex1));
// console.log(regex2.exec(str));

//26. 문자열 "Hello, JavaScript is fun!"에서
//소문자 'a', 'e', 'i', 'o', 'u' 중 하나라도 포함된 문자를 모두 찾아 배열로 반환하세요.
let str2 = "Hello, JavaScript is fun!";

//글자 모음도 대괄호 [] 사용 
//'a', 'e', 'i', 'o', 'u' 중 일치하는 문자를 찾아서 배열로 반환
let aeiou = str2.match(/[aeiou]/g); 
console.log(aeiou); // ["e", "o", "a", "a", "i", "i", "u"]

//27. 문자열 "Welcome to the world of coding!"에 'coding'라는 단어가 포함되어 있는지 확인하세요.
let str3 = "Welcome to the world of coding!";
// /coding/ : 정규표현식 객체 생성
// 정규표현식 객체의 test함수 사용할 것
let hasWorld = /coding/.test(str3); //매치되는 문자열이 있으면 true 반환
console.log(hasWorld); // true

//28. 문자열 "JavaScript is powerful"에서 'is'라는 단어가 처음으로 등장하는 위치의 인덱스를 반환하세요.
let str4 = "JavaScript is powerful";
console.log(str4.search("is")); // 11

//29. 문자열 "banana"에서 'a' 문자가 하나 이상 연속된 부분을 모두 찾아 배열로 반환하세요.
let str5 = "baanaaana";

//문자가 하나 이상은 연속된 부분은 +기호 사용
let aMatches = str5.match(/a+/g); // a문자가 하나이상 연속으로 있는 부분 찾기
console.log(aMatches); // ["a", "a", "a"]

//30. 문자열 "abc123ABC"에서 대소문자 구분 없이 'abc'를 찾아 결과를 배열로 반환하세요.
let str6 = "abc123ABC";
let abcMatches = str6.match(/abc/gi);
console.log(abcMatches); // ["abc", "ABC"]

//31. 문자열 "Hello, World! How are you today?"에서 대문자를 모두 찾아 배열로 반환하세요.
let str7 = "Hello, World! How are you today?";

//대문자 모음도 대괄호 [] 사용 
let result = str7.match(/[A-Z]/g);
console.log(result); // ["H", "W", "H"]
