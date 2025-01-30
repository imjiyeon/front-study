//위에서 부터 입력필드를 하나씩 검사하고, 경고메세지는 하나만 표시
function validate(f){
  // 아이디 정규식        
  var regId = /^[0-9a-z]{4,8}$/;         
  // 주민등록번호 정규식(앞자리)
  var regPid1 = /^\d{6}$/;
  // 주민등록번호 정규식(뒷자리)
  var regPid2 = /^\d{7}$/;

  // 아이디 체크
  if(!regId.exec(f.id.value)){
      alert("아이디는 4~8자 소문자 or 숫자");
      f.id.focus();
      return;
  }

  // 비밀번호 체크
  if(f.pw.value != f.checkpw.value){
      alert("비밀번호가 맞지 않습니다..");
      return;
  }

  // 이름 체크
  if(f.name.value == ""){
    alert("이름을 입력하세요..");
    f.name.focus();
    return;
  }

  // 주민등록번호 체크
  if(!regPid1.exec(f.sn1.value)){
      alert("주민등록번호 앞자리는 숫자 6자리");
      return;
  }else if(!regPid2.exec(f.sn2.value)){
      alert("주민등록번호 뒷자리는 숫자 7자리");
      return;
  } 

  // 관심분야 체크
  var int_cnt = 0;
  for(var i=0; i<f.interest.length; i++){
      if(f.interest[i].checked){
          int_cnt++;
      }
  }
  if(int_cnt == 0){
      alert("관심분야를 선택하세요..");
      return;
  }

  // 테이블에 회원을 추가
  addDataToTable();
  alert("새로운 회원이 추가되었습니다!");
}

//주민번호를 입력한 후 확인버튼 클릭 시
//뒷자리에서 첫번째 문자를 추출하여 확인하고
//성별을 자동으로 입력
function checkGender() {
    const sn2 = document.getElementById('sn2').value;
    const maleRadio = document.getElementById('male');
    const femaleRadio = document.getElementById('female');

    if (sn2.length > 0) {
        const gender = sn2.charAt(0);

        if (gender === '1' || gender === '3') {
            maleRadio.checked = true;
        } else if (gender === '2' || gender === '4') {
            femaleRadio.checked = true;
        } else {
            maleRadio.checked = false;
            femaleRadio.checked = false;
        }
    }
}

// 테이블에 새로운 회원 추가
function addDataToTable() {
    // 폼 데이터를 가져옴
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    // name이 "gender"인 입력필드 중에서, 사용자가 선택한 요소 찾기
    // 필드선택자 + 속성선택자 + 상태선택자
    const gender = document.querySelector('input[name="gender"]:checked');
    const interests = document.querySelectorAll('input[name="interest"]:checked');
    
    // 빈 배열을 생성하여 선택된 값들을 저장
    // NodeList를 순회하면서 선택된 값들을 배열에 추가
    // 관심분야를 콤마로 구분된 문자열로 변환
    let arr = [];
    interests.forEach(function(interest) {
        arr.push(interest.value);
    });
    const interestList = arr.join(', ');

    // 테이블의 tbody 가져오기
    const tableBody = document.getElementById('info-table').querySelector('tbody');

    // 테이블의 tbody에 새로운 행을 추가
    let newRow = `
    <tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${gender ? gender.value : ''}</td>
        <td>${interestList}</td>
    </tr>    
    `;
    tableBody.insertAdjacentHTML("beforeend", newRow);

    // 폼을 리셋하여 다음 입력을 준비
    document.getElementById('signup-form').reset();
}