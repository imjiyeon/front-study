
// list에 todo를 추가하는 함수
function createTodo (storageData) {
  const todoInput = document.querySelector("#todo-input");
  let todoContents = todoInput.value;
  let todoComplete = null;

  // 스토리지에서 값 꺼내기
  if (storageData) {
    todoContents = storageData.contents;
    todoComplete = storageData.complete;
  }

  //TODO 만들기
  const newLi = document.createElement("li");

  //내용
  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.value = todoContents;
  newInput.disabled = true; // 처음에는 입력 필드를 비활성화

  //체크박스
  const checkBox = document.createElement("input");
  checkBox.type='checkbox';

  //삭제버튼
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "삭제";

  // 수정버튼
  const editBtn = document.createElement("button");
  editBtn.textContent = "수정";
  
  // 체크박스 이벤트 리스너
  checkBox.addEventListener('change', () =>{ 
    newLi.classList.toggle("complete");
    saveItemsFn();
    countTodo();
  })

  // 완료여부가 true면 체크
  if(todoComplete!=null && todoComplete == true){
    checkBox.checked = true;
  }

  // 삭제버튼 클릭시 요소 삭제
  removeBtn.addEventListener("click", () => {
    newLi.remove();
    saveItemsFn();
    countTodo();
  });

  // 수정버튼 클릭시 할 일 수정
  editBtn.addEventListener("click", () => {
    if (editBtn.textContent === "수정") {
      newInput.disabled = false; // 입력 필드를 활성화
      editBtn.textContent = "저장";
    } else {
      newInput.disabled = true; // 입력 필드를 비활성화
      editBtn.textContent = "수정";
      saveItemsFn();
    }
  });

  // storageData 객체가 없으면 complete 속성을 꺼낼때 에러남
  if (typeof storageData != "undefined" && storageData.complete) {
    newLi.classList.add("complete");
  }

  const todoList = document.querySelector("#todo-list");

  newLi.appendChild(checkBox);
  newLi.appendChild(newInput);
  newLi.appendChild(editBtn);
  newLi.appendChild(removeBtn);
  todoList.appendChild(newLi);
  todoInput.value = "";
  saveItemsFn();
  countTodo();
};

// todo 추가 버튼 이벤트 함수
function addTodo() {
  const todoInput = document.querySelector("#todo-input");

  // trim(): 공백제거
  // 값이 입력되었으면 새로운 todo 생성
  if (todoInput.value.trim() !== "") {
    createTodo();
  }
};

// 모든 todo를 삭제하는 함수
function deleteAll () {
  const liList = document.querySelectorAll("li");
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove(); //하나씩 삭제
  }
  saveItemsFn();
  countTodo();
};

// todolist 만들고 스토리지에 저장하는 함수
function saveItemsFn () {

  // ul 태그 밑에 있는 li 찾기
  // querySelector X querySelectorAll O
  // querySelector는 단건만 반환함
  const todoList = document.querySelectorAll("#todo-list > li");

  const saveItems = [];

  // todo 내용과 완료여부로 객체를 생성하고 배열에 추가
  // 각 항목이 완료/미완료인지 구분
  for(let todo of todoList){

    // 각 li 안에서 입력필드와 체크박스 찾기
    // querySelector는 document 뿐만이 아니라 element에서도 사용 가능
    let text = todo.querySelector('input[type="text"]');

    // li에 complete 클래스가 포함되어 있는지 확인해서 완료여부 설정
    const todoObj = {
      contents:text.value, //내용
      complete:todo.classList.contains("complete"), //완료여부
    };
    saveItems.push(todoObj);
  }

  console.log(saveItems);

  saveItems.length === 0
    ? localStorage.removeItem("saved-items")
    : localStorage.setItem("saved-items", JSON.stringify(saveItems));
};

// 아이템 건수와 완료된 건수를 표시하는 함수
function countTodo(){
  // 모든 <li> 요소를 가져오기
  const li = document.querySelectorAll('li');
  const liCount = li.length;

  // 체크된 체크박스를 필터링하여 가져오기
  const checkedCheckbox = document.querySelectorAll('li input[type="checkbox"]:checked');
  const checkBoxCount = checkedCheckbox.length;

  console.log(`li 개수: ${liCount}`);
  console.log(`체크된 checkbox 개수: ${checkBoxCount}`);

  // 화면에 표시
  const totalTodo = document.getElementById("total-todo");
  totalTodo.textContent = liCount;
  const completeTodo = document.getElementById("complete-todo");
  completeTodo.textContent = checkBoxCount;
}

// 처음 화면이 로드 될 때, 스토리지에 저장된 todo list 가져오기
const savedItems = localStorage.getItem("saved-items")
const savedTodoList = JSON.parse(savedItems);

// todo 개수 만큼 아이템 추가
if (savedTodoList) {
  for (let i = 0; i < savedTodoList.length; i++) {
    createTodo(savedTodoList[i]);
  }
}

