//html 요소 가져오기
const pwd1 = $("#pwd1"); //패스워드
const pwd2 = $("#pwd2");
const button = $("button"); //제출버튼
const span = $("span");

// 제출 버튼을 클릭하면 입력필드 값 확인하기

function func() {
    // 패스워드가 일치하는지 확인
    const value1 = pwd1.val();
    const value2 = pwd2.val();

    if (value1 != value2) { //비밀번호가 다르면 오류메세지가 화면에 나타남
        span.show();
    } else {
        span.hide();
    }

    return false;
}