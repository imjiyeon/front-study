// 문자열의 모든 자리수를 더해서 합을 구하기

let str = "0112233";
let sum = 0;

// s: "0" "1" "1" "2" "2" "3" "3"
for (let value of str) {
  console.log(value, typeof value); //"0" string 
  let num = parseInt(value); //"0" -> 0
  sum = sum + num;
}

console.log(sum); //합계
