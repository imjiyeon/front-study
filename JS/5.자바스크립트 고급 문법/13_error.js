// try~catch: 코드에서 발생하는 오류를 처리

try {
  nonExistentFunction(); // 존재하지 않는 함수 호출
} catch (error) {
  console.error(error); // ReferenceError: nonExistentFunction is not defined
} finally {
  console.log(
    "try 코드 블록이 정상적으로 수행이 되든, 오류를 발생하든 상관없이 무조건 실행해야 할 코드를 작성한다"
  );
}

// 강제로 에러를 발생시킬 때는 throw 사용
try {
  throw "myException";
} catch (err) {
  console.log(err);
}
