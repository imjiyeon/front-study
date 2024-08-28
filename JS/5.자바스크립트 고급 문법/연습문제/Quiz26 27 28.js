//구조분해할당 (배열)

//26.배열을 분해하여 모든 요소를 변수에 저장하세요.
let colors = ["red", "green", "blue"];

// 배열을 분해하여 필요한 요소를 변수에 저장 (객체는 [] 사용)
let [color1, color2, color3] = colors;

console.log(color1); // "red"
console.log(color2); // "green"
console.log(color3); // "blue"

//27.배열을 분해하여 첫번째와 네번째 요소만를 변수에 저장하세요.
let fruits = ["사과", "바나나", "오렌지", "키위"];
let [fruit1, , , fruit4] = fruits;

console.log(fruit1); // "사과"
console.log(fruit4); // "키위"

//28.함수에서 배열을 입력받고, 배열의 첫 번째와 세 번째 요소를 출력하세요.
function printElements([first, , third]) {
  console.log(`${first}와 ${third}`);
}

let elements = ["사과", "바나나", "오렌지", "키위"];

printElements(elements);
// "사과와 오렌지" 출력
