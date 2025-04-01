// 문자열에서 특정 문자가 몇 번 나오는지 세어 보세요

// 문자열에서 a의 개수 세기 

const str = "aaabbc";
const target = "a";
let count = 0; // a의 개수

for (let char of str) {
  if (char === target) {
    count++;
  }
}

console.log(`a의 개수: ${count}`); // 3

