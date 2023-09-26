/* html요소에 class속성 추가하기 */

const boxEl = document.querySelector('.box');
console.log(boxEl);

boxEl.addEventListener('click', function(){
    //class속성에 active값이 없으면 추가, 있으면 삭제함 
    boxEl.classList.toggle('active');
    
    //요소에 active 속성이 있는지 확인
    let hasActive = boxEl.classList.contains('active');
    console.log(hasActive);
});
