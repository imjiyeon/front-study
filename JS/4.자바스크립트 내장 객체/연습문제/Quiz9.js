//배열에서 문자열의 길이가 5보다 긴 요소만 찾아 대문자로 변환하세요.

var fruits = ["apple", "banana", "grape", "kiwi", "watermelon"];

// 길이가 5보다 긴 문자열을 대문자로 변환하여 새 배열에 저장
var longFruits = fruits
  .filter((fruit) => fruit.length > 5)
  .map((fruit) => fruit.toUpperCase());

console.log(longFruits); // ["BANANA", "WATERMELON"]
