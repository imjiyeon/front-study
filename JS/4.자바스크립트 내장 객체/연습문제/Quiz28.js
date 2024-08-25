// 두 명의 플레이어가 주사위를 3번씩 던져 그 합을 비교하는 주사위 게임을 만드세요.
// 더 높은 합을 얻은 플레이어가 승리합니다.

function rollDice(times) {
  const arr = [];
  for (let i = 0; i < times; i++) {
    let num = Math.floor(Math.random() * 6) + 1;
    arr.push(num);
  }
  return arr;
}

const player1 = rollDice(3);
const player2 = rollDice(3);

const sum1 = player1.reduce((sum, n) => sum + n, 0);
const sum2 = player2.reduce((sum, n) => sum + n, 0);

console.log("Player 1의 주사위 결과:", player1, "합:", sum1);
console.log("Player 2의 주사위 결과:", player2, "합:", sum2);

if (sum1 > sum2) {
  console.log("Player 1 승리!");
} else if (sum1 < sum2) {
  console.log("Player 2 승리!");
} else {
  console.log("무승부!");
}

// 함수를 안 사용했을 경우
// 코드가 중복됨..
const playerArr1 = [];
for (let i = 0; i < 3; i++) {
  let num = Math.floor(Math.random() * 6) + 1;
  playerArr1.push(num);
}
console.log("Player 1의 주사위 결과:", playerArr1);

const playerArr2 = [];
for (let i = 0; i < 3; i++) {
  let num = Math.floor(Math.random() * 6) + 1;
  playerArr2.push(num);
}
console.log("Player 1의 주사위 결과:", playerArr2);
