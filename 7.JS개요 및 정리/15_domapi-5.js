/* HTML문서에서 찾은 모든 요소의 정보 출력하기  */

const boxEls = document.querySelectorAll('.box'); //1개이상의 요소들이 반환됨
console.log(boxEls); //여러개가 반환됬기 때문에 바로 사용할 수 없음

//forEach 메소드를 사용하면 요소를 순회할 수 있음
//인자로 함수를 사용함
boxEls.forEach(function (boxEl, index) { //첫번째요소: BoxEl, 두번째요소: 인덱스번호
    console.log(boxEl, index);
});