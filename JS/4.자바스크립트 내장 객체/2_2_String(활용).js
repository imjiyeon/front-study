// 1.이메일의 도메인 찾기

const email = "user@naver.com";

// 구분자로 "@" 사용 => 아이디, 도메인으로 구분됨
// 두번째 도메인을 추출
const emailDomain = email.split("@")[1];

console.log(emailDomain);

// 2.파일의 확장자가 ‘.jpg’ ‘.png’ ‘.gif’ 아니라면
// “지원되지 않는 파일 형식입니다”라는 메시지를 출력하기

// 지원되는 확장자 목록
const allowedExtensions = [".jpg", ".png", ".gif"];

const filename = "사과.txt";

// 파일의 확장자 추출
const index = filename.lastIndexOf("."); //2
const extension = filename.slice(index); // .txt (2번부터 끝까지)

// 확장자가 지원되지 않는 경우 메시지 출력
if (!allowedExtensions.includes(extension)) {
  console.log("지원되지 않는 파일 형식입니다");
} else {
  console.log("지원되는 파일 형식입니다");
}

