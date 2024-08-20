//다음 메시지에 금지어가 있으면 XXX로 변경하여 출력하고, 없으면 그대로 출력하세요.

const forbiddenWords = ["나쁜", "더러운"];
let message = "저 친구는 나쁜 친구야. 정말 더러운 사람 같아.";

for (let word of forbiddenWords) {
  message = message.replace(word, "XX"); // 금지어를 "XX"로 대체
}

console.log(message);
