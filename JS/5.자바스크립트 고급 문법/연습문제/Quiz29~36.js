//29. 문자열 "I have 2 apples and 3 oranges."에서 숫자(0-9)를 모두 찾아 배열로 반환하세요.
let str1 = "I have 2 apples and 3 oranges."; //검색 대상

//0 ~ 9 범위는 대괄호 [] 사용
//0 ~ 9 숫자를 찾아서 배열로 반환 
let numbers = str1.match(/[0-9]/g); 
console.log(numbers); // ["2", "3"]

//30. 문자열 "Hello, JavaScript is fun!"에서
//소문자 'a', 'e', 'i', 'o', 'u' 중 하나라도 포함된 문자를 모두 찾아 배열로 반환하세요.
let str2 = "Hello, JavaScript is fun!";

//글자 모음도 대괄호 [] 사용 
//'a', 'e', 'i', 'o', 'u' 중 일치하는 문자를 찾아서 배열로 반환
let aeiou = str2.match(/[aeiou]/g); 
console.log(aeiou); // ["e", "o", "a", "a", "i", "i", "u"]

//31. 문자열 "Welcome to the world of coding!"에 'coding'라는 단어가 포함되어 있는지 확인하세요.
let str3 = "Welcome to the world of coding!";
// /coding/ : 정규표현식 객체 생성
// 정규표현식 객체의 test함수 사용할 것
let hasWorld = /coding/.test(str3); //매치되는 문자열이 있으면 true 반환
console.log(hasWorld); // true

//32. 문자열 "JavaScript is powerful"에서 'is'라는 단어가 처음으로 등장하는 위치의 인덱스를 반환하세요.
let str4 = "JavaScript is powerful";
console.log(str4.search("is")); // 11

//33. 문자열 "banana"에서 'a' 문자가 하나 이상 연속된 부분을 모두 찾아 배열로 반환하세요.
let str5 = "banana";

//문자가 하나 이상은 연속된 부분은 +기호 사용
let aMatches = str5.match(/a+/g); // a문자가 하나이상 연속으로 있는 부분 찾기
console.log(aMatches); // ["a", "a", "a"]

//34. 문자열 "abc123ABC"에서 대소문자 구분 없이 'abc'를 찾아 결과를 배열로 반환하세요.
let str6 = "abc123ABC";
let abcMatches = str6.match(/abc/gi);
console.log(abcMatches); // ["abc", "ABC"]

//35. 문자열 "Hello, World! How are you today?"에서 대문자를 모두 찾아 배열로 반환하세요.
let str7 = "Hello, World! How are you today?";

//대문자 모음도 대괄호 [] 사용 
let result = str7.match(/[A-Z]/g);
console.log(result); // ["H", "W", "H"]

//36. 문자열 "2024-08-27"에서 연도, 월, 일을 각각 나누어 추출하세요.
let str8 = "2024-08-27";

//\d: 숫자
//{숫자}: 앞에 패턴이 지정된 횟수만큼 반복됨
//(): 캡처 그룹으로, 일치하는 부분만 문자열로 묶어서 추출
//(\d{4}): 첫번째 그룹 (연도)
//(\d{2}): 두번째 그룹 (월)
//(\d{2}): 셋번째 그룹 (일)
let dateParts = str8.match(/(\d{4})-(\d{2})-(\d{2})/); //숫자4개-숫자2개-숫자2개
console.log(dateParts); 
// ["2024-08-27", "2024", "08", "27"]
// 전체 문자열, 첫번째 그룹, 두번째 그룹, 세번째 그룹