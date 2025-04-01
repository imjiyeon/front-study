// 금지어를 변환하여 출력

// 원본 문자열
let message = "저 친구는 나쁜 친구야. 정말 더러운 사람 같아.";
console.log(message);

// 금지어 목록
const forbiddenWords = ["나쁜", "더러운"];

for (let word of forbiddenWords) {
  // 금지어를 "XX"로 대체
  // repeat: x를 문자열의 길이만큼 반복
  // '나쁜' -> 'XX' 
  // '더러운' -> 'XXX'
  message = message.replace(word, "X".repeat(word.length)); 
}
console.log(message);

