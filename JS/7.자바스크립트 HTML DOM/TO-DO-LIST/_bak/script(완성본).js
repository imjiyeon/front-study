
// 리스트에 할일을 추가하는 함수
function addTodo (storageData) {

  const todoInput = document.querySelector("#todo-input");
  let todoContents = null; //할일 내용
  let todoComplete = null;

  // 화면을 로드할 때 호출됬으면 스토리지에서 꺼낸 데이터 사용
  if (storageData) {
    todoContents = storageData.contents;
    todoComplete = storageData.complete;
    
    // 추가버튼을 직접 클릭했으면 사용자가 입력한 내용을 사용
  } else {

    // 공백을 제거한 후에 값이 있는지 확인
    if (todoInput.value.trim() !== "") {
      todoContents = todoInput.value; //할일 내용
    } else {
      alert("입력값이 없습니다");
      return;
    }
    
  }

  //새로운 li 태그 생성
  const newLi = document.createElement("li");

  //할일 내용
  //조회/수정 모드로 구분하기 위해 span 대신 input 사용
  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.value = todoContents;
  newInput.disabled = true; // 처음에는 읽기 전용으로 설정

  //체크박스 (완료 여부 표시)
  const checkBox = document.createElement("input");
  checkBox.type='checkbox';

  //삭제버튼
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "삭제";

  // 수정버튼
  const editBtn = document.createElement("button");
  editBtn.textContent = "수정";
  
  // 체크박스 이벤트 리스너 (완료 여부 토글)
  checkBox.addEventListener('change', () =>{ 
    newLi.classList.toggle("complete");

    // 할일 개수와 리스트 상태 업데이트
    countTodo();
    saveItemsFn();
  })

  // 스토리지에서 가져온 데이터라면, 체크상태 유지
  if(todoComplete!=null && todoComplete == true){
    checkBox.checked = true;
    newLi.classList.add("complete"); //스타일도 변경
  }

  // 삭제버튼 클릭시 할일 삭제
  removeBtn.addEventListener("click", () => {
    newLi.remove();
    
    // 할일 개수와 리스트 상태 업데이트
    countTodo();
    saveItemsFn();
  });

  // 수정버튼 클릭시 할 일 수정모드로 전환
  editBtn.addEventListener("click", () => {

    // 텍스트에 따라 모드를 구분
    if (editBtn.textContent === "수정") {
      newInput.disabled = false; // 입력필드에 수정이 가능하게 설정
      editBtn.textContent = "저장";

    } else {
      newInput.disabled = true; // 수정 후 다시 읽기 모드로 설정
      editBtn.textContent = "수정";

      // 리스트 상태 업데이트
      saveItemsFn();
    }
  });

  // 할일 리스트에 새로운 할일 추가
  const todoList = document.querySelector("#todo-list");
  newLi.appendChild(checkBox);
  newLi.appendChild(newInput);
  newLi.appendChild(editBtn);
  newLi.appendChild(removeBtn); // li에 체크박스, 내용, 버튼 추가
  todoList.appendChild(newLi); // 완성한 li를 ul에 추가

  // 입력필드 초기화
  todoInput.value = "";

  // 할일 개수와 리스트 상태 업데이트
  countTodo();
  saveItemsFn();
};

// 리스트를 모두 삭제하는 함수
function deleteAll () {
  // ul 아래 모든 li 가져오기
  const liList = document.querySelectorAll("li");
  // li를 하나씩 삭제
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove();
  }

  // 할일 개수와 리스트 상태 업데이트
  countTodo();
  saveItemsFn();
};

// 할일의 총 개수와 완료된 개수를 표시하는 함수
function countTodo(){
  // 모든 li 요소를 가져오기 (전체 할일 개수)
  const li = document.querySelectorAll('li');
  const liCount = li.length;

  // 체크된 체크박스를 가져오기 (완료된 할일 개수)
  // 체크 박스 중에서 선택된 항목 찾기 (속성선택자와 상태선택자 사용)
  const checkedCheckbox = document.querySelectorAll('li input[type="checkbox"]:checked');
  const checkBoxCount = checkedCheckbox.length;

  // console.log(`li 개수: ${liCount}`);
  // console.log(`체크된 checkbox 개수: ${checkBoxCount}`);

  // 화면에 할일의 총개수와 완료된 할일의 개수를 표시
  const totalTodo = document.getElementById("total-todo");
  totalTodo.textContent = liCount;

  const completeTodo = document.getElementById("complete-todo");
  completeTodo.textContent = checkBoxCount;
}

// 스토리지에 할일 리스트를 저장하는 함수
function saveItemsFn () {

  // ul 태그 안에 모든 li 태그 찾기 (querySelectorAll를 사용할 것)
  const todoList = document.querySelectorAll("#todo-list > li");

  // 할일 리스트
  const saveItems = [];

  // 각 li 태그에서 할일 내용과 완료 여부를 추출
  for(let todo of todoList){

    // querySelector는 document 뿐만이 아니라 element에서도 사용 가능
    // 각 li 요소에 있는 텍스트필드(할일내용) 찾기
    let text = todo.querySelector('input[type="text"]');

    // 완료여부는 li에 'complete' 클래스가 포함되어 있는지 확인
    const todoObj = {
      contents:text.value, //할일 내용
      complete:todo.classList.contains("complete"), //완료 여부
    };

    saveItems.push(todoObj); //배열에 할일 객체 추가
  }

  // console.log(saveItems);

  // 할일이 한개도 없으면 스토리지에서 삭제, 있으면 저장
  if(saveItems.length == 0){
    localStorage.removeItem("saved-items")
  } else {
    localStorage.setItem("saved-items", JSON.stringify(saveItems));
  }

};

// 처음 화면이 로드 될 때, 스토리지에 저장된 할일 목록 가져오기
const savedItems = localStorage.getItem("saved-items")
const savedTodoList = JSON.parse(savedItems);

// 저장된 할일 목록이 있으면, 화면에 표시하기
if (savedTodoList) {
  for (let todo of savedTodoList) {
    addTodo(todo);
  }
}