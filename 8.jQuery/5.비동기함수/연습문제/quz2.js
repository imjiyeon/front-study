// Q. 다음 코드를 실행했을때 예상결과를 작성하세요. 
let promise = new Promise(function(resolve, reject) {
    resolve();
});

promise
.then(function() {
    console.log('Success 1');
})
.then(function() {
    console.log('Success 2');
})
.catch(function() {
    console.log('Error 1');
});

// 정답
// Success 1
// Success 2

//then() 함수의 반환값이 promise객체라서, then()함수를 여러번 사용할 수 있음
//resolve()가 호출되면 첫번째 then()과 두번째 then()이 순차적으로 실행됨