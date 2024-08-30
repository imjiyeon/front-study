//연락처 입력 필드에 숫자가 아닌 값이 입력되면 테두리 색상을 빨간색으로 변경한다
function checkNumberInput(field) {
  //전화번호는 값이 아니기 때문에 타입체크 대신 정규식을 사용하여 형식을 확인해야 한다
  var regex1 = /^[0-9]*$/; // 01012345678
  var regex2 = /^\d{3}-\d{4}-\d{4}$/ //010-1234-5678
  if (regex1.test(field.value) == false) {
    field.style.borderColor = "red";
  } else {
    field.style.borderColor = "";
  }
}

//textarea에 입력된 글자 수를 실시간으로 업데이트하고,
//최대 글자 수를 초과할 경우 경고 색상을 표시한다
function updateCharacterCount(textarea) {
  var maxLength = 30; // 최대 글자 수
  var charCountDiv = document.getElementById("charCount");
  var currentLength = textarea.value.length;
  // "10/30글자" 다시 작성해서 div의 컨텐츠 업데이트
  charCountDiv.textContent = currentLength + "/" + maxLength + " 글자";

  // 최대 글자 수 초과 시 경고 표시
  if (currentLength > maxLength) {
    textarea.style.color = "red";
  } else {
    textarea.style.color = "";
  }
}

//"접수" 버튼을 클릭하면 폼이 유효한지 확인하고, 유효하지 않을 경우 경고 메시지를 표시
//모든 입력필드를 확인한 후에 에러메세지는 종합적으로 한번만 표시
function validateForm() {
  var nameInput = document.getElementById("sname");
  var numberInput = document.getElementById("snumber");
  var fieldInputs = document.getElementsByName("field");
  //유효성 검사를 위한 값. 검증에 실패하면 false로 변경
  var isValid = true; 
  var errorMessage = "";

  // 이름 필드가 비어 있는지 확인하고, 비어 있으면 에러 메세지를 추가
  if (nameInput.value === "") {
    isValid = false;
    errorMessage += "이름을 입력해주세요.\n";
  }

  // 연락처 필드가 비어 있는지 확인하고, 비어 있으면 에러 메세지를 추가
  if (numberInput.value === "") {
    isValid = false;
    errorMessage += "연락처를 입력해주세요.\n";
  }

  // 지원 분야가 선택되었는지 확인
  var isFieldSelected = false;
  for (var i = 0; i < fieldInputs.length; i++) {
    // 각 라디오버튼의 checked 속성을 확인하여, 선택된 것이 있으면 true 저장
    if (fieldInputs[i].checked) {
      isFieldSelected = true;
      break;
    }
  }

  if (!isFieldSelected) {
    isValid = false;
    errorMessage += "지원 분야를 선택해주세요.\n";
  }

  // 유효하지 않으면 에러메세지 표시
  if (!isValid) {
    alert(errorMessage);
  }

  //submit 버튼을 누르면 폼이 서버에 제출되며 화면이 새로고침된다
  //만약 폼이 초기화 되는 것을 원하지 않는다면 submit버튼 대신 일반버튼을 사용할 것
}
