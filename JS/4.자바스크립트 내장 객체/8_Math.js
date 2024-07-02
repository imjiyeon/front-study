//Math: 수학적인 상수와 함수를 가진 객체

//숫자 반올림
console.log(Math.round(4.9)); //5
console.log(Math.round(4.4)); //4

//무조건 올림
console.log(Math.ceil(4.9)); //5
console.log(Math.ceil(4.4)); //5

//무조건 내림
console.log(Math.floor(4.9)); //4
console.log(Math.floor(4.4)); //4

//소수 부분 버리고 정수 부분만 반환
console.log(Math.trunc(4.9)); //4
console.log(Math.trunc(4.4)); //4

//양수인지 음수인지 확인
//양수면 1, 음수면 -1, 0이면 0
console.log(Math.sign(-4)); //-1
console.log(Math.sign(0)); //0
console.log(Math.sign(4)); //1

//제곱근
console.log(Math.pow(8, 2)); //64

//루트
console.log(Math.sqrt(64)); //8

//절대값
console.log(Math.abs(-4.7)); //4.7

//최소값, 최대값
console.log(Math.min(0, 150, 30, 20, -8, -200)); //-200
console.log(Math.max(0, 150, 30, 20, -8, -200)); //150

//0~1의 랜덤 숫자 반환
console.log(Math.random());

console.log(Math.floor(Math.random() * 10)); // 0에서 9사이의 정수
console.log(Math.floor(Math.random() * 10) + 1); // 1에서 10사이의 정수
