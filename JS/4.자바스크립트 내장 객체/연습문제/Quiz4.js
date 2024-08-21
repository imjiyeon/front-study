// 문자열의 모든 자리수를 더해서 합을 구하세요.

let str = "0112233";
let sum = 0;

for (let s of str) {
  let num = parseInt(s);
  console.log(typeof num, num);
  sum = sum + num;
}

console.log(sum);
