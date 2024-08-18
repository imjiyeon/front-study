// Q. 5 X 3 크기의 사각형을 별(*)로 출력하세요.
// 너비가 5이고 높이가 3입니다
// hint. 문자열 합치는 방법
let test = "a" + "b"; // ab

// *****
// *****
// *****

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 3; j++) {
    row = row + "*";
  }
  console.log(row);
}

// 5 X 5 크기의 삼각형을 별(*)로 출력하세요.
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row = row + "*";
  }
  console.log(row);
}
