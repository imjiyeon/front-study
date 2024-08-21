//주어진 문자열에서 연속된 동일한 문자들이 몇 번 반복되는지 세고, 이를 “문자+숫자” 형식으로 압축하세요.

const str = "aaabbc";
let compressed = ""; //압축된 문자
let count = 1; //현재 문자가 몇번 반복되었는지 카운트

for (let i = 0; i < str.length; i++) {
  //현재 문자가 다음문자와 같은지 비교
  if (str[i] === str[i + 1]) {
    count++;
  } else {
    // 같지 않으면 카운트 종료. 압축된 문자 추가
    compressed = compressed + str[i] + count;
    // 카운트 초기화
    count = 1;
  }
}

console.log(compressed); // 출력: a3b2c1
