// 주사위 굴리기: 1~6 사이의 숫자 중 무작위로 하나 생성
let num = Math.floor(Math.random() * 6) + 1;
console.log("주사위 결과:", num);

// 주사위 3번 던지기
// for (let i = 0; i < 3; i++) {
//   let num = Math.floor(Math.random() * 6) + 1;
//   console.log(num)
// }

const arr = [];
for (let i = 0; i < 3; i++) {
  let num = Math.floor(Math.random() * 6) + 1;
  arr.push(num);
}
console.log("3번 던진 결과:", arr);
