
const result = true; // 서버에 데이터를 요청하고 받은 성공 여부

setTimeout(function () { // 콜백함수
    if (result) {
        console.log('성공');
    } else {
        console.error('실패');
    }
}, 3000);

/*
setTimeout()와 같은 비동기 함수의 결과를 콜백 함수로 바로 처리하면,
콜백 함수의 내용이 길어질수록 가독성이 떨어지게 된다.
*/