//연락처 입력 필드에 숫자가 아닌 값이 입력되면 테두리 색상을 빨간색으로 변경한다
function checkNumberInput(field) {
  var regex = /^[0-9]*$/; // 숫자만 허용하는 정규 표현식
  if (!regex.test(field.value)) {
    field.style.borderColor = "red";
  } else {
    field.style.borderColor = "";
  }
}

//폼 제출 시 이름과 연락처가 입력되었는지 확인하며, 
//누락된 경우 경고 메시지를 표시
function validateForm() {
  var nameInput = document.getElementById("sname");
  var numberInput = document.getElementById("snumber");
  var fieldInputs = document.getElementsByName("field");
  var isValid = true;
  var errorMessage = "";

  // 이름 필드가 비어 있는지 확인
  if (nameInput.value.trim() === "") {
    isValid = false;
    errorMessage += "이름을 입력해주세요.\n";
  }

  // 연락처 필드가 비어 있는지 확인
  if (numberInput.value.trim() === "") {
    isValid = false;
    errorMessage += "연락처를 입력해주세요.\n";
  }

  // 지원 분야가 선택되었는지 확인
  var isFieldSelected = false;
  for (var i = 0; i < fieldInputs.length; i++) {
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

}

//textarea에 입력된 글자 수를 실시간으로 업데이트하고,
//최대 글자 수를 초과할 경우 경고 색상을 표시한다
function updateCharacterCount(textarea) {
  var maxLength = 30; // 최대 글자 수
  var charCountDiv = document.getElementById("charCount");
  var currentLength = textarea.value.length;
  charCountDiv.textContent = currentLength + "/" + maxLength + " 글자";

  // 최대 글자 수 초과 시 경고 표시
  if (currentLength > maxLength) {
    textarea.style.color = "red";
  } else {
    textarea.style.color = "";
  }
}
