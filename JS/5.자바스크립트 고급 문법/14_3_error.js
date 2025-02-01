// 강제로 에러를 발생시킬 때는 throw 사용
// 에러를 발생시켜 catch 블록을 실행해야 할 때 사용함

try {
  throw "myException"; //에러메세지로 작성하여 에러를 강제로 발생시킴
} catch (err) {
  console.log(err); //발생한 에러를 catch 블록에서 처리
}