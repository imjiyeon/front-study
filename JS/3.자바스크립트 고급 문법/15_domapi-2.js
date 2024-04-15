/* index3.html, html에서 html요소 찾기 */

//querySelector() 선택자를 통해 html에서 요소를 찾는 함수. 검색을 통해 찾은 첫번째 요소 반환

const boxEl = document.querySelector('.box'); //인자로 css선택자 입력
console.log(boxEl); //null이 출력됨. html요소가 존재하지만 찾을 수 없음

/*
index3.html 이동해서 <script>에 defer 속성을 추가한다.
다시 콘솔을 확인하면 요소를 잘 찾아서 출력한다.
<script>를 <body>보다 앞에 작성하면 브라우저가 HTML구조를 읽기 전에 자바스크립트가 동작하므로 DOM API를 사용할 수 없다.
따라서 <script>를 <body>의 뒤에 작성하거나, defer 속성을 추가하면 DOM API가 정상으로 동작한다. 
*/