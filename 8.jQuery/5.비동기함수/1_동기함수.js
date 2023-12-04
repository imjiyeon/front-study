/* 일반함수 사용법 */

function first(){
    second();
    console.log('첫번째');
}
function second(){
    third();
    console.log('두번째');
}
function third(){
    console.log('세번째');
}
first();

//일반함수는 순차적으로 처리됨
//콜스택은 선입후출의 구조라서 "세번째 두번째 첫번째" 순으로 출력됨
