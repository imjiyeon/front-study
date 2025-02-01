/* Set */

// 책 목록 Set 생성
const readBooks = new Set();
// 책 추가
readBooks.add("해리포터");
readBooks.add("반지의 제왕");
readBooks.add("어린왕자");
readBooks.add("데미안");
readBooks.add("1984");
readBooks.add("위대한 개츠비");

// 모든 책 목록 출력
console.log("현재 읽은 책 목록:");
for (let book of readBooks) {
  console.log(book);
}
console.log();

// 제목이 7글자 이상인 책 삭제
for (let book of readBooks) {
  if (book.length >= 7) {
    readBooks.delete(book);
    console.log(`${book}을(를) 책 목록에서 삭제했습니다.`);
  }
}
console.log();

// 두 명의 사용자가 읽은 책 목록 비교 (공통된 책 찾기)
const friendReadBooks = new Set([
  "어린왕자",
  "1984",
  "노인과 바다",
  "그리스인 조르바",
]);

console.log("친구가 읽은 책 목록:");
for (let book of friendReadBooks) {
  console.log(book);
}
console.log();

const commonBooks = new Set();

for (let book of readBooks) {
  if (friendReadBooks.has(book)) {
    commonBooks.add(book);
  }
}

console.log("두 명의 사용자가 공통으로 읽은 책:");
for (let book of commonBooks) {
  console.log(book);
}
