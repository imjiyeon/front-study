// Q. 다음 코드를 실행했을때 예상결과를 작성하세요. 

setTimeout(function callback() {
    console.log('첫번째 타이머 종료');
}, 5000);

setTimeout(function callback() {
    console.log('두번째 타이머 종료');
}, 0);

setTimeout(function callback() {
    console.log('세번째 타이머 종료');
}, 3000);

// 정답: 2 -> 3 - >1

// 모든함수가 실행되기까지 5초가 걸렸다.
// 만약 타이머함수가 동기식으로 처리된다면 총 몇초가 걸릴까? (8초)