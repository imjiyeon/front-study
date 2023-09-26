/* 비동기함수를 promise로 처리하기 */

const result = false;
const sec = 3;

// promise를 생성하면 resolve, reject 함수를 인자로 사용할수있음
// resolve: 작업이 성공적으로 끝나면 결과데이터를 전달
// reject: 문제가 발생하면 에러데이터를 전달 
const promise = new Promise((resolve, reject) => { 
    setTimeout(() => {
        if(result){
            resolve('성공');
        } else {
            reject('실패');
        }
    }, sec * 1000);
});

//요청에 성공하면 then에 성공메세지를 전달하고 남은 작업을 처리
//요청에 실패하면 catch에 실패메세지를 전달하고 남은 작업을 처리
//Pending -> Fulfilled or Rejected
promise
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.error(error);
});

/*
Promise를 사용하면 본함수와 처리결과를 분리할 수 있기 때문에
비동기함수를 더 깔끔하게 처리할 수 있다
*/
