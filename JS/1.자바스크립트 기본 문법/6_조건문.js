/* if문 */
const year = 2023;

if (year == 2023) {
  //조건식
  console.log("정답입니다!"); //조건식을 만족하고 출력됨
}

if (year == 2024) {
  console.log("정답입니다!"); //조건을 만족한다면 첫번째 블록을 수행
} else {
  console.log("오답입니다!"); //조건을 만족하지 않는다면 두번째 블록을 수행
}

if (year == 2023) {
  console.log("year는 2023과 같습니다");
} else if (year < 2023) {
  console.log("year는 2023보다 작습니다");
} else {
  console.log("year는 2023보다 큽니다");
}

// if문으로 버스 프로그램 만들기

let age = 12; //승객의 나이
let busFare = 0; //버스요금
if (age <= 7) {
  busFare = 0; //승객의 나이가 7살 이하라면 버스 요금은 0원
} else if (age >= 8 && age <= 13) {
  busFare = 450; //승객의 나이가 8살 이상 13살 이하라면 버스 요금은 450원
} else if (age >= 14 && age <= 19) {
  busFare = 720; //승객의 나이가 14살 이상 19살 이하라면 버스 요금은 720원
} else if (age >= 20 && age < 70) {
  busFare = 1200; //승객의 나이가 20살 이상 70살 미만이라면 버스 요금은 1200원
} else {
  busFare = 0; //승객의 나이가 70살 이상 이라면 버스 요금은 0원
}

/* switch문 */
const rank = 1; // 조건값
switch (rank) {
  case 1: // 변수와 값이 일치하는 case문으로 바로 찾아가서 실행함
    console.log("금메달입니다");
    break;
  case 2:
    console.log("은메달입니다");
    break;
  case 3:
    console.log("동메달입니다");
    break;
  default: // 조건이 모두 일치하지 않을 때 실행됨
    console.log("메달이 없습니다");
    break;
}
