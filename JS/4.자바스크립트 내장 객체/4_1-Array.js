//toString: 배열을 문자열로 반환
var fruits = ["바나나", "오렌지", "사과", "망고"];
console.log(fruits.toString()); // 바나나,오렌지,사과,망고

//join: 배열 요소를 지정한 구분자로 연결
console.log(fruits.join(" * ")); // 바나나 * 오렌지 * 사과 * 망고

//pop: 마지막 요소를 제거하고 반환
var x = fruits.pop(); // x = "망고"
console.log(x);

//push: 끝에 새로운 요소를 추가
fruits.push("키위"); // "키위"를 fruits 배열에 추가
console.log(fruits);

//shift: 첫번째 요소를 제거하고 반환
var f = fruits.shift(); // 바나나
console.log(f);
console.log(fruits);

//unshift: 배열 앞에 새로운 요소를 추가, 배열의 길이 반환
var len = fruits.unshift("레몬");
console.log(len);
console.log(fruits);

//첫번째 요소를 "체리"로 변경
fruits[0] = "체리";
console.log(fruits);

//splice: 특정 위치에 새로운 요소를 추가 또는 삭제
//새로운 요소를 추가할 인덱스 번호, 추가하기 전에 삭제할 요소 수, 나머지: 추가할 요소
fruits.splice(2, 0, "딸기", "메론"); //2번째 인덱스에 "딸기" "메론" 추가
console.log(fruits); // [체리, 오렌지, 딸기, 메론, 사과, 키위]

//slice: 배열의 일부를 잘라내서 새로운 배열을 반환
//시작인덱스 (마지막 인덱스 생략 시 마지막까지)
console.log(fruits.slice(3)); //  [메론, 사과, 키위]
//시작인덱스, 마지막인덱스
console.log(fruits.slice(1, 3)); // [오렌지, 딸기]

//concat: 여러 배열을 하나로 합치기
var arr1 = ["토마토", "오이"];
var arr2 = ["당근", "감자", "양파"];
var arr3 = ["호박", "배추"];
var vegetable = arr1.concat(arr2, arr3);
console.log(vegetable);

//forEach: 배열의 각 요소에 대해 함수 실행
vegetable.forEach(function (item, index) {
  console.log("야채 " + index + ": " + item);
});
