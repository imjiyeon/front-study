/* 익명함수 */

// 이름이 있는 함수
function hello(){
    console.log('Hello~');
}
hello();

// 이름이 없는 함수
//함수를 선언할 때는 이름이 없었지만, 변수에 대입하여 변수의 이름이 함수 이름이 됨
const world = function() { 
    console.log('World~');
}
world();

//익명함수를 사용하는 경우
//HTML문서를 클릭하면 handler 이벤트가 호출되는 코드 작성하기
function handler(){
    console.log('Clicked!');
}
document.body.addEventListener('click', handler); //함수를 미리 선언하고 인자로 사용

// 함수를 재사용할 필요가 없다면 익명함수를 사용하는 것이 편리함
document.body.addEventListener('click', function (){
    console.log('Clicked!');
});