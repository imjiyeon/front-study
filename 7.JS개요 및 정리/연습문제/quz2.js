// Q3. 다음 문자열 배열을 사용하여 첫번째 요소와 마지막요소를 합쳐서 출력하세요

// 결과: Pizza Steak

// 정답
const foodList = ['Pizza', 'Hamburger', 'Chicken', 'Steak'];

const food1 = foodList[0];
const food2 = foodList[foodList.length - 1];

const result = food1 + ' ' + food2;

console.log(result);