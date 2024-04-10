/* 비동기함수를 promise로 처리하기 */

const result = false; //요청성공여부

// promise를 생성하면 resolve, reject 함수를 인자로 사용할수있음
// resolve: 작업이 성공적으로 끝나면 결과데이터를 전달
// reject: 문제가 발생하면 에러데이터를 전달
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(result){ //서버에 데이터를 요청하고 정상적으로 응답이 왔으면
            resolve('성공'); //resolve함수를 호출하면서 데이터 전달
        } else {
            reject('실패'); //요청에 실패했으면 reject함수를 호출
        }
    }, 3000);
});

//요청에 성공하면 then에 성공메세지를 전달하고 남은 작업을 처리
//요청에 실패하면 catch에 실패메세지를 전달하고 남은 작업을 처리
//Pending -> Fulfilled or Rejected
promise
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});

/*
Promise를 사용하면 본함수와 처리결과를 분리할 수 있기 때문에
비동기함수를 더 깔끔하게 처리할 수 있다
*/
