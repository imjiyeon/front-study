// try~catch: 코드에서 발생하는 오류를 처리

try {
  func(); // 존재하지 않는 함수 호출하면 ReferenceError 에러가 발생함
} catch (error) {
  console.error(error); // 오류메세지를 출력
} finally {
  console.log(
    "try 코드 블록이 정상적으로 수행이 되든, 오류를 발생하든 상관없이 무조건 실행해야 할 코드를 작성한다"
  );
}

// 강제로 에러를 발생시킬 때는 throw 사용
try {
  throw "myException"; //"myException"를 에러메세지로 사용하여 에러 발생시키기
} catch (err) {
  console.log(err); //발생한 에러를 catch 블록에서 처리
}
