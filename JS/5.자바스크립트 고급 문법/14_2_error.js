// try~catch: 코드에서 발생하는 오류를 처리

// try~catch는 에러가 발생하더라도 프로그램을 정상적으로 종료하기 위해서 사용한다

try {
  func(); // 존재하지 않는 함수 호출하면 ReferenceError 에러가 발생함
} catch (error) {
  console.error(error); // 오류메세지를 출력
} 

console.log('프로그램이 정상적으로 종료되었습니다');

// try {
//   func();
// } catch (error) {
//   console.error(error);
// } finally {
//   console.log(
//     "try 코드 블록이 정상적으로 수행이 되든, 오류를 발생하든 상관없이 무조건 실행해야 할 코드를 작성한다"
//   );
// }

