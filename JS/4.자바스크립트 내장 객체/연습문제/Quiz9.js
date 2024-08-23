//배열에서 문자열의 길이가 5보다 긴 요소만 찾아, 대문자로 변환하세요.

//버전1
var fruits = ["apple", "banana", "grape", "kiwi", "watermelon"];
console.log("원본 배열: ", fruits);

// 문자열의 길이가 5보다 요소만 필터링하여 새로운 배열 생성
var newarr1 = fruits.filter((fruit) => fruit.length > 5);
console.log("필터링된 배열: ", newarr1);

// 필터링된 배열의 각 요소를 대문자로 변경하여 새로운 배열 생성
var newarr2 = newarr1.map(function (fruit) {return fruit.toUpperCase()});
console.log("변환된 배열: ", newarr2);
  
//버전2
// 필터링과 맵핑을 연속적인 체인으로 처리
var longFruits = fruits
  .filter((fruit) => fruit.length > 5)
  .map((fruit) => fruit.toUpperCase());

console.log();
console.log("최종 결과:", longFruits); // ["BANANA", "WATERMELON"]