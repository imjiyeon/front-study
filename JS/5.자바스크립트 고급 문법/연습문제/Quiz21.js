//스프레드 연산자

// Q21. 다음과 같이 책 객체를 생성하세요.
let book = {
  title: "위대한 개츠비",
  author: "스콧 피츠제럴드",
  publishedYear: 1925,
};
console.log("원본객체: " + JSON.stringify(book));

// (스프레드 연산자를 사용하여) 객체를 복사하세요.
let copyBook = { ...book };
console.log("복사된객체: " + JSON.stringify(copyBook));

// 복사된 객체에서 출판년도를 2023으로 변경하세요.
copyBook.publishedYear = 2023;
console.log("원본객체의 출판년도: " + book.publishedYear); // 1925 (원본 객체의 publishedYear 값)
console.log("복사된객체의 출판년도: " + copyBook.publishedYear); // 2023 (복사된 객체의 publishedYear 값)
