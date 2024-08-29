//정규식의 최소, 최대 크기는 ppt에 표시..
//범위가 여러가지 일때도 표시

//위에서 부터 입력필드를 하나씩 검사하고, 경고메세지는 하나만 표시
function validate(f){
  // 아이디 정규식        
  var regId = /^[0-9a-z]{8,16}$/;         
  // 비밀번호 정규식
  var regPw = /^[0-9a-zA-Z]{8,16}$/;    
  // 주민등록번호 정규식(앞자리)
  var regPid1 = /^\d{6}$/;
  // 주민등록번호 정규식(뒷자리)
  var regPid2 = /^\d{7}$/;

  
  // 1. 아이디 체크
  if(!regId.exec(f.id.value)){
      alert("아이디는 8~16자 소문자 or 숫자");
      f.id.value = '';
      f.id.focus();
      return;
  }

  // 2. 비밀번호 체크
  if(!regPw.exec(f.pw.value)){
      alert("비밀번호는 8~16자 소문자 or 대문자 or 숫자");
      f.pw.value = '';
      f.pw.focus();
      return;
  }else if(f.pw.value != f.checkpw.value){
      alert("비밀번호를 확인해주세요.");
      f.pw.value = '';
      f.checkpw.value = '';
      return;
  }

  // 5. 주민등록번호 체크
  if(!regPid1.exec(f.sn1.value)){
      alert("주민등록번호 앞자리는 숫자 6자리");
      return;
  }else if(!regPid2.exec(f.sn2.value)){
      alert("주민등록번호 뒷자리는 숫자 7자리");
      return;
  } 

  // 6. 관심분야 체크
  var int_cnt = 0;
  for(var i=0; i<f.interest.length; i++){
      if(f.interest[i].checked){
          int_cnt++;
      }
  }
  if(int_cnt == 0){
      alert("관심분야를 선택하세요.");
      return;
  }

  // 7. 자기소개 체크
  if ( f.self.value == "" ) {
      alert("자기소개를 입력하세요.");
      f.self.focus();
      return;
  }

  f.submit();
}
