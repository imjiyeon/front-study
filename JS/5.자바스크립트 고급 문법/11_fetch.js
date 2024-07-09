//fetch: API를 호출하여 서버로부터 데이터를 받아오는 함수
//method~header: API주소와 파라미터를 입력하는 부분
//THEN: 서버로부터 응답데이터를 받는 부분

//GET - 1번 게시물 조회
fetch("localhost:8080/board/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

//POST - 새로운 게시물 생성
fetch("localhost:8080/board", {
  method: "POST", //HTTP 요청 방법
  body: JSON.stringify({
    //전송할 데이터
    title: "가입인사",
    content: "안녕하세요~",
    userId: "user1",
  }),
  headers: {
    //헤더 값 정의
    "content-type": "application/json; charset=UTF-8", //content-type 정의
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//PUT - 1번 게시물 수정
fetch("localhost:8080/board/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "가입인사",
    content: "반갑습니다~",
    userId: "user1",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//DELETE - 1번 게시물 삭제
fetch("localhost:8080/board/1", {
  method: "DELETE",
});
