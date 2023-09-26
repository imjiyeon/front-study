/* 아무 html에서 코드 실행 */

//dir메소드는 객체의 속성을 출력. log메소드는 객체의 정보를 출력.
console.dir(document); 

//현재 노드의 자식 노드 리스트 반환
console.dir(document.childNodes) //[<!DOCTYPE html>, html]

//head와 body는 엘리먼트 노드, text는 텍스트를 표현하는 노드
console.dir(document.childNodes[1].childNodes) //[head, text, body] 
