//이메일의 도메인을 확인하세요.

const email = "user@naver.com";

// 이메일 주소에서 "@" 뒤에 오는 도메인을 추출
const emailDomain = email.split("@")[1];

console.log(emailDomain);
