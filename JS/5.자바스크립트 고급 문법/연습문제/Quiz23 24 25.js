// 구조분해할당 (객체)

// 23. 다음 객체에서 브랜드(brand)와 가격(price) 속성을 추출하여 변수에 저장하세요.
let product = {
  brand: "Apple",
  price: 990000,
  model: "iPhone 13",
};
console.log("객체: " + JSON.stringify(product));

// 객체를 분해하여 필요한 속성을 변수에 저장 (객체는 {} 사용)
let { brand, price } = product;

console.log("브랜드: " + brand); // "Apple"
console.log("가격: " + price); // 990000

// 24. 다음 객체에서 제목(title)과 출시연도(year) 속성을 추출하여
// 각각 'movieTitle'과 'releaseYear'라는 이름의 변수에 저장하세요.
let movie = {
  title: "인셉션",
  director: "크리스토퍼 놀란",
  year: 2010,
};
console.log("객체: " + JSON.stringify(movie));

let { title: movieTitle, year: releaseYear } = movie;

console.log("제목: " + movieTitle); // "인셉션"
console.log("출시연도: " + releaseYear); // 2010

// 25. 함수에서 객체를 매개변수로 받아, 'brand'와 'model' 속성을 출력하세요.
function printCar({ brand, model }) {
  console.log(`자동차 브랜드: ${brand}, 모델명: ${model}`);
}

let car = {
  brand: "Tesla",
  model: "Model S",
  color: "Red",
};
console.log("객체: " + JSON.stringify(car));

printCar(car);
// "Tesla" 출력
// "Model S" 출력
