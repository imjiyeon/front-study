// 문자열 배열의 첫번째 요소와 마지막요소를 합쳐서 출력하기

// 배열 생성
const foodList = ['Pizza', 'Hamburger', 'Chicken', 'Steak'];

// 배열의 첫번째 요소 꺼내기
const food1 = foodList[0]; // Pizza

// 배열의 마지막 요소 꺼내기
const lastIndex = foodList.length - 1; // 3
const food2 = foodList[lastIndex]; // Steak

// 문자열 연결
console.log(food1 + ' ' + food2); // Pizza Steak
console.log(food1, food2); // Pizza Steak