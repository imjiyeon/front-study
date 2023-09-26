// Q. 두 개의 정수 n과 m를 받아서 빼기 함수를 만드는데, 일반함수와 화살표함수 2가지 형태로 만드세요
// 예시: 정수 2개 (5, 3)
// 결과: 2

// 정답1
function func1(a, b) {
    return a - b;
}
console.log(func1(5, 3)); // 2

// 정답2
const func2 = (a, b) => {
    return a - b;
}
console.log(func2(5, 3)); // 2
    