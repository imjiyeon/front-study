/* setTimeout 비동기 함수 */

console.log('시작');

setTimeout(function callback() { //3초를 대기하고 문자를 출력
    console.log('timer 종료');
}, 3000);

console.log('종료');

//결과: 시작->종료->timer 종료

//setTimeout는 비동기식으로 처리되는 함수이다
//따라서 setTimeout()이 끝나지 않았는데도 '종료'가 출력된 것이다
//만약 setTimeout이 동기식으로 처리된다면 'timer 종료'->'종료' 순으로 출력될 것이다