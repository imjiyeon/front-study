//위에서 부터 입력필드를 하나씩 검사하고, 경고메세지는 하나만 표시
function validate(f){
  // 아이디 정규식        
  var regId = /^[0-9a-z]{4,8}$/;         

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

  // 테이블에 회원을 추가
  addDataToTable();
  alert("새로운 회원이 추가되었습니다!");
}

// 테이블에 새로운 회원 추가
function addDataToTable() {
    // 폼 데이터를 가져옴
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    // name이 "gender"인 입력필드 중에서, 사용자가 선택한 요소 찾기
    // 필드선택자 + 속성선택자 + 상태선택자
    const gender = document.querySelector('input[name="gender"]:checked');
    
    // 테이블의 tbody 가져오기
    const tableBody = document.getElementById('info-table').querySelector('tbody');

    // 새로운 행(tr) 요소 생성
    let newRow = document.createElement("tr");

    // 각 데이터에 대한 셀(td) 생성
    let idCell = document.createElement("td");
    idCell.textContent = id;

    let nameCell = document.createElement("td");
    nameCell.textContent = name;

    let genderCell = document.createElement("td");
    genderCell.textContent = gender ? gender.value : '';

    // 생성된 td 요소들을 tr 요소에 추가
    newRow.appendChild(idCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(genderCell);

    // 테이블의 tbody에 새로운 행을 추가
    tableBody.appendChild(newRow);

    // 폼을 리셋하여 다음 입력을 준비
    document.getElementById('signup-form').reset();
}