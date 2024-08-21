//toString: 객체의 정보를 문자열로 반환하는 함수
var fruits = ["바나나", "오렌지", "사과", "망고"];
console.log(fruits.toString()); // Banana,Orange,Apple,Mango

//join: 배열 요소와 *를 연결하여 문자열을 반환하는 함수
console.log(fruits.join(" * ")); // Banana * Orange * Apple * Mango

//pop: 마지막 데이터를 제거하고, 반환하는 함수
var x = fruits.pop(); // x = "Mango"
console.log(x);

//push: 배열에 새로운 요소를 추가
fruits.push("키위"); // "Kiwi"를 fruits 배열에 추가
console.log(fruits);

//shift: 배열의 첫번째 요소를 제거하고, 반환
var f = fruits.shift(); // Banana
console.log(f);
console.log(fruits);

//unshift: 배열 제일 앞에 요소를 추가하고, 배열의 길이 반환
var len = fruits.unshift("레몬");
console.log(len);
console.log(fruits);

//배열에서 인덱스가 0인 요소인 "레몬"을 "체리"로 변경
fruits[0] = "체리";
console.log(fruits);

//splice: 배열의 특정 위치에 새로운 요소를 추가
fruits.splice(2, 0, "딸기", "메론"); //새로운 요소를 추가할 인덱스 번호, 추가하기 전에 삭제할 요소 수, 나머지: 추가할 요소
console.log(fruits); // [Banana, Orange, Lemon, Kiwi, Apple, Mango]

//concat: 배열들을 하나로 합치기
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);

//slice: 배열의 요소 잘라내기
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3); //시작인덱스 (두번째 파라미터를 생략하면 마지막까지 출력)
console.log(citrus); // [Apple, Mango]
var citrus2 = fruits.slice(1, 3); //시작인덱스, 마지막인덱스
console.log(citrus2); // [Orange, Lemon]
