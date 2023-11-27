// Q.두 개의 정수 n과 m를 받아 별(*)문자를 이용해 직사각형을 출력하세요
// hint. 문자열 합치는 방법
let test = 'a' + 'b'; // ab

// 예시: 정수 2개 (5, 3)
// 결과:
// *****
// *****
// ***** 

// 정답
const a = 5, b = 3;
for(let i =0; i < b; i++){
    let result = '';
    for(let j=0; j<a; j++){
        result = result + '*';
    }
    console.log(result)
}