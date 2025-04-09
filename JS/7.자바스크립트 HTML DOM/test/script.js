// 페이지 로드와 동시에 DOM 조작하면 에러날 수 있음
// HTML 문서가 완전히 생성되기 전에 스크립트를 실행하면,
// 아직 div가 생성되지 않았기 때문에 null이 반환됨
const box = document.getElementById("box");
box.style.background = "yellow";


