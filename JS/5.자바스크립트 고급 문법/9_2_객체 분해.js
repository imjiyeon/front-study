// 객체 분해 활용

// 객체에서 제목(title)과 출시연도(year) 속성을 추출하여
// 각각 'movieTitle'과 'releaseYear'라는 이름의 변수에 저장한다.
let movie = {
    title: "인셉션",
    director: "크리스토퍼 놀란",
    year: 2010,
};

console.log("객체: " + JSON.stringify(movie));
  
let { title: movieTitle, year: releaseYear } = movie;
  
console.log("제목: " + movieTitle); // "인셉션"
console.log("출시연도: " + releaseYear); // 2010