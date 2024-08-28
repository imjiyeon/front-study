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

// 복잡한 객체를 복사할 때는 스프레드 연산자 대신 JSON 메서드를 사용하여 완벽하게 복사해야 한다

let bookStr = JSON.stringify(book); // {} -> ""
let deepCopyBook = JSON.parse(bookStr); // "" -> {}
console.log("복사된객체: " + JSON.stringify(deepCopyBook));

// 복사된 객체에서 저자의 성을 "김"으로 변경
deepCopyBook.author.lastName = "김";

console.log("원본객체의 성: " + book.author.lastName); // "박" (원본 영향x)
console.log("복사된객체의 성: " + deepCopyBook.author.lastName); // "김" 
