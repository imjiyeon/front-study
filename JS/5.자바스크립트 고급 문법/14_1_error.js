// 에러 유형

// 존재하지 않는 함수 호출하면 발생
// func(); // ReferenceError 에러남

// 숫자 범위가 벗어나면 발생. 배열 길이는 음수가 될 수 없음
let arr = new Array(-1); // RangeError 에러남

// 예약어를 변수명으로 사용할 수 없음
// let let = 10; // 문법 에러

// foo는 함수가 아니므로 호출할수 없음
// let foo = 123;
// foo(); // TypeError 에러남

console.log('프로그램이 정상적으로 종료되었습니다');

// 에러가 발생하면 프로그램이 중간에 종료된다