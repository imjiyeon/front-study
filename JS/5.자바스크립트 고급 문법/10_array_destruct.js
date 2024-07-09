//배열의 요소를 분해해서 변수에 저장하기

let arr1 = [70, 80, 90];

//선언 변수가 배열 문법 처럼 보이지만, 배열이 아님. 배열 리턴값을 순서대로 받기 위한 용도임.
let [a, b, c] = arr1;

console.log(a); // 70
console.log(b); // 80
console.log(c); // 90

let arr2 = [70, 80, 90, 100];
let [x, y, ...args] = arr2; //70,80은 변수에 저장. 나머지는 args 배열에 저장

console.log(x); // 70
console.log(y); // 80
console.log(args); // [90, 100]
