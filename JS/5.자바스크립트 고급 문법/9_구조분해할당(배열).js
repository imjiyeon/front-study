//배열을 분해해서 변수에 저장하기

let arr1 = [1, 2, 3];

//배열을 분해할 때는 []대괄호를 사용함
//배열의 요소가 순서대로 변수에 저장됨
let [a, b, c] = arr1;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

let arr2 = [10, 20, 30, 40];
let [x, y, ...args] = arr2; //10,20은 각각 변수에 저장되고, 나머지는 args 배열에 저장됨

console.log(x); // 10
console.log(y); // 20
console.log(args); // [30, 40]

// 배열의 첫 번째 요소는 n1에, 세 번째 요소는 n3에, 네 번째 요소는 n4에 저장됨
// 두 번째 요소는 건너뛰고 저장되지 않음
let arr3 = [100, 200, 300, 400];
let [n1, , n3, n4] = arr3;
console.log(n1); //100
console.log(n3); //200
console.log(n4); //400
