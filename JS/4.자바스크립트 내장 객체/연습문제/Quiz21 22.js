// 1에서 6까지의 숫자를 무작위로 생성하는 6면체 주사위가 있습니다
// 주사위를 던지고 숫자를 출력하세요

let num = Math.floor(Math.random() * 6) + 1;
console.log("주사위 결과:", num);

// 주사위를 10번 던지고, 각 결과를 배열에 저장하세요

const arr = [];
for (let i = 0; i < 10; i++) {
  let num = Math.floor(Math.random() * 6) + 1;
  arr.push(num);
}
console.log("10번 던진 결과:", arr);
