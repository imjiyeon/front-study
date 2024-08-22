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


// 초기 상태:
// str = "aaabbc"
// compressed = "" (빈 문자열) 
// count = 1

// i = 0:
// str[0] = 'a'
// count = 2로 증가 (다음 문자도 'a'라서)
// compressed: "" (변경 없음)

// i = 1:
// str[1] = 'a'
// count = 3로 증가 (다음 문자도 'a'라서)
// compressed: "" (변경 없음)

// i = 2:
// str[2] = 'a'
// count = 1로 초기화 (다음 문자가 'b'로 바뀜)
// compressed: "a3"

// i = 3:
// str[3] = 'b'
// count = 2로 증가 (다음 문자도 'b'라서)
// compressed: "a3" (변경 없음)

// i = 4:
// str[4] = 'b'
// count = 1로 초기화 (다음 문자가 'c'로 바뀜)
// compressed: "a3b2"

// i = 5:
// str[5] = 'c' (마지막문자)
// compressed = "a3b2c1"

// 최종 상태:
// compressed = "a3b2c1"