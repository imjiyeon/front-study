// 배열에서 길이가 5보다 긴 문자열만 찾으세요.

var arr = ["apple", "banana", "grape", "kiwi", "watermelon"];
var filteredArr = arr.filter((fruit) => fruit.length > 5);

console.log("길이가 5보다 긴 문자열: ", filteredArr); // ["banana", "watermelon"]
