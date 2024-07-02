//Map: key-value형태로 값들을 저장하는 객체
//자료를 저장할때 순서가 없음

let userMap = new Map();
userMap.set("name", "홍길동"); //새로운 데이터 추가
userMap.set("email", "abc@email.com");
userMap.set("phone", "000-0000-0000");
userMap.size; //map의 크기

userMap.get("name"); //데이터 꺼내기

userMap.has("name"); //특정 키의 값이 있는지 확인

userMap.delete("name"); //특정 데이터 삭제

//map에 저장되어 있는 모든 데이터 읽기
userMap.forEach(function (item) {
  console.log(item);
});

userMap.clear(); //저장되어 있는 모든 데이터가 삭제 됨
