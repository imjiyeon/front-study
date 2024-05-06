// 길이를 반환하는 속성
let txt = "ABCDE";
let len = txt.length;

// 특정 문자열이 존재하는지 확인하고, index(위치)를 반환하는 함수
let str = "안녕하세요 저는 둘리입니다";
let pos1 = str.indexOf("둘리"); //9
console.log(pos1);
let pos2 = str.indexOf("또치"); //-1
console.log(pos2);

//찾고자 하는 문자열이 둘 이상 발견되면, 제일 마지막에 발견된 문자열의 index(위치)를 반환하는 함수
let str2 = "둘리 둘리 둘리";
let pos3 = str2.lastIndexOf("둘리"); //6
let pos4 = str2.lastIndexOf("또치"); //-1 (못찾으면 -1 반환)
console.log(pos3);
console.log(pos4);

//시작위치와 마지막위치를 입력받아, 문자열에서 해당부분을 잘라서 반환하는 함수
let str3 = "사과, 바나나, 키위";
let res = str3.slice(9, 11); //키위
let res2 = str3.slice(9); //키위 (마지막위치를 생략하면 문자열 끝까지 읽음)
console.log(res);
console.log(res2);

//substr()은 slice()와 동일한 기능
let res3 = str3.substring(9, 11);
console.log(res3);

//특정 문자열을 다른 문자열로 교체하는 함수
let newStr = str3.replace("바나나", "딸기"); //사과, 딸기, 키위
console.log(newStr);

//문자열을 모두 대문자로 변경하는 함수, 모두 소문자로 변경하는 함수
let str4 = "Hello World";
let str5 = str4.toUpperCase(); //HELLO WORLD
let str6 = str4.toLowerCase(); //hello world
console.log(str5);
console.log(str6);

//2개 이상의 문자열을 연결하는 함수
let str7 = "Hello";
let str8 = "World";
let str9 = str7.concat(" ", str8);
console.log(str9);

//앞, 뒤 공백을 제거하는 함수
let text1 = "   Hello World   ";
console.log(text1.trim()); //Hello World

//지정된 문자를 지정된 길이만큼 추가하는 함수
let text2 = "5";
console.log(text2.padStart(4, 0)); //0005 (앞에서부터 추가)
console.log(text2.padEnd(4, 0)); //5000 (뒤에서부터 추가)

//특정 인덱스에 있는 문자 하나를 반환하는 함수
let text3 = "Hello World";
console.log(text3.charAt(0)); //H

//해당 문자를 유니코드값으로 반환하는 함수
console.log(text3.charCodeAt(0)); //72 (A가65)

//구분자를 기준으로 문자열을 쪼개는 함수
let birthday = "1997-06-12";
let arr = birthday.split("-"); //['1997', '06', '12']
console.log(arr);

//문자열이 특정 값으로 시작되는지 확인하는 함수
let url = "http://website.com";
if (url.startsWith("http://")) {
  console.log("올바른 형식의 사이트 주소입니다!");
} else {
  console.log("잘못된 형식의 사이트 주소입니다..");
}

//문자열이 특정 값으로 끝나는지 확인하는 함수
let file = "abc.pdf";
if (file.endsWith(".pdf")) {
  console.log("pdf 파일이 맞습니다!");
} else {
  console.log("pdf 형식의 파일이 아닙니다..");
}
