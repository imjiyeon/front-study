//스프레드 연산자

// 다음과 같이 책 객체를 생성하세요.
let book = {
  title: "자바 프로그래밍 입문",
  author: {
    firstName: "은종",
    lastName: "박",
  },
};
console.log("원본객체: " + JSON.stringify(book));

// (JSON 메서드를 사용하여) 객체를 완벽하게 복사하세요.
let deepCopyBook = JSON.parse(JSON.stringify(book));
console.log("복사된객체: " + JSON.stringify(deepCopyBook));

// 복사된 객체의 author.lastName을 "김"으로 변경하세요.
deepCopyBook.author.lastName = "김";

console.log("원본객체의 성: " + book.author.lastName); // "박" (원본 객체의 author.lastName 값)
console.log("복사된객체의 성: " + deepCopyBook.author.lastName); // "김" (복사된 객체의 author.lastName 값)
