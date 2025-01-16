// 연락처 map 생성
const contacts = new Map();

// 6명의 연락처 추가
// key-string value-object
contacts.set("민수", { phone: "010-1234-5678", address: "서울특별시 강남구" });
contacts.set("지영", { phone: "010-8765-4321", address: "부산광역시 해운대구"});
contacts.set("현우", { phone: "010-2345-6789", address: "대구광역시 수성구" });
contacts.set("수빈", { phone: "010-9876-5432", address: "인천광역시 남동구" });
contacts.set("동민", { phone: "010-3456-7890", address: "광주광역시 서구" });
contacts.set("하은", { phone: "010-6543-2109", address: "대전광역시 유성구" });

// 연락처 전체 출력
console.log("연락처 목록:");
for (let [name, info] of contacts) {
  console.log(`${name}: ${info.phone}, ${info.address}`);
}
console.log();

// 동민의 연락처가 있는지 확인 후 수정
if (contacts.has("동민")) {
  contacts.set("동민", { phone: "010-9999-9999", address: "광주광역시 서구" });
  console.log("동민의 연락처를 수정했습니다.");
} else {
  console.log("동민의 연락처가 없습니다.");
}
console.log();

// 지영의 연락처가 있는지 확인 후 삭제
if (contacts.has("지영")) {
  contacts.delete("지영");
  console.log("지영의 연락처를 삭제했습니다.");
} else {
  console.log("지영의 연락처가 없습니다.");
}
console.log();

// 연락처 전체 출력
console.log("현재 연락처 목록:");
for (let [name, info] of contacts) {
  console.log(`${name}: ${info.phone}, ${info.address}`);
}
console.log();

// 전체 연락처 개수 확인
console.log(`현재 연락처 개수: ${contacts.size}`);
