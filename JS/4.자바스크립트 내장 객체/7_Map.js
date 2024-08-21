//Map: 키-값 쌍으로 데이터를 저장하는 객체
//자료를 저장할때 순서가 없음

let userMap = new Map();

//새로운 데이터 추가
userMap.set("name", "홍길동");
userMap.set("email", "abc@email.com");
userMap.set("phone", "000-0000-0000");

// Map의 크기 확인
console.log(userMap.size); // 3

// 특정 키의 데이터 가져오기
console.log(userMap.get("name")); // "홍길동"

// 특정 키가 존재하는지 확인
console.log(userMap.has("name")); // true

// 특정 데이터 삭제
userMap.delete("name");

// Map에 저장된 모든 데이터 출력
userMap.forEach(function (item) {
  console.log(item);
});

// 저장된 모든 데이터를 삭제
userMap.clear();
