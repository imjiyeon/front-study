/* 비동기함수를 콜백함수로 처리하기 */

const result = true; // 예상결과
const sec = 3;

setTimeout(function(){ //callback 함수
    if(result){
        console.log('성공');
    } else {
        console.error('실패');
    }
}, sec * 1000);

/*
setTimeout()와 같은 비동기 함수의 결과를 콜백 함수로 바로 처리하면,
콜백 함수의 내용이 길어질수록 가독성이 떨어지게 된다.
*/