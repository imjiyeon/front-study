/* 조건문 */

const isShow = true; //참을 의미하는 값

if (isShow) {
    console.log('Show!'); //조건식을 만족하고 출력됨
}

if(isShow){
    console.log('Show!'); //조건을 만족한다면 첫번째 블록을 수행
} else {
    console.log('Hide?'); //조건을 만족하지 않는다면 두번째 블록을 수행
}

/* 반복문 */
for(let i = 1; i < 11; i++){
    console.log(i);
}