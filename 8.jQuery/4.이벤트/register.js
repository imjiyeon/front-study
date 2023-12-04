//html 요소 가져오기
const pwd1 = $("#pwd1"); //패스워드
const pwd2 = $("#pwd2");
const button = $("button"); //제출버튼
const span = $("span");

// 버튼을 클릭하면 함수가 호출되어 패스워드가 일치하는지 확인
function func() {

    const value1 = pwd1.val();
    const value2 = pwd2.val();

    //비밀번호가 일치하지 않으면 오류메세지를 화면에 표시
    if (value1 != value2) {
        span.show();
    } else {
        span.hide();
    }

    return false;
    // 비밀번호를 검증한 후에 ajax 같은 함수를 사용하여 서버에 데이터 전송
}