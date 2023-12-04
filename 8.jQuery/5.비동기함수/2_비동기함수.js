/* setTimeout 비동기 함수 */

console.log('시작');

//타이머함수 인자: 실행할 함수(콜백함수), 지연시간(밀리세컨드) 
setTimeout(function callback() { //3초를 대기하고 로그 출력
    console.log('timer 종료');
}, 3000);

console.log('종료');

//결과: 시작->종료->timer 종료

//타이머함수는 비동기식으로 처리되기 때문에 '종료'가 먼저 출력되었다.
//만약 타이머함수가 동기식으로 처리된다면 '시작 -> timer 종료-> 종료' 순으로 출력될 것이다