// 새로운 도서를 등록하는 함수
function registerBook(){

  // 카테고리, 도서명, 가격 입력 값 가져오기
  const category = document.getElementById("category").value;
  const bookname = document.getElementById("bookname").value;
  const bookprice = document.getElementById("bookprice").value;

  // 각 입력필드가 비어 있는지 확인
  if (category === "") {
    alert("카테고리를 선택해주세요.");
    return;
  }

  if (bookname === "") {
    alert("도서명을 입력해주세요.");
    return;
  }

  if (bookprice === "") {
    alert("가격을 입력해주세요.");
    return;
  }
  
  // 같은 카테고리에서 동일한 책이 존재하는지 확인 (카테고리가 다르면 상관없음)
  let bookList = getBookList(); // 도서 목록 가져오기

  for(let book of bookList){
    if(book.category == category && book.bookname == bookname){
      alert("같은 카테고리 안에 동일한 책이 중복되어 있습니다.");
      return;
    }
  }

  // 새로운 행(tr) 생성
  const newRow = document.createElement("tr");

  // 도서번호 셀 생성 
  // 새로운 도서 번호 계산 (기존 행의 개수 + 1)
  const newBookNum = document.createElement("td");

  const lastNumber = parseInt(bookList[bookList.length - 1].no) + 1;
  newBookNum.textContent = lastNumber;

  // 카테고리 셀 생성 
  const newCategory = document.createElement("td");
  newCategory.textContent = category;

  // 도서명 셀 생성 
  const newBookName = document.createElement("td");
  newBookName.textContent = bookname;

  // 가격 셀 생성 및 '원' 단위 표시
  const newBookPrice = document.createElement("td");
  newBookPrice.textContent = bookprice + '원';

  // 삭제버튼 생성
  const newRemove = document.createElement("td");
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "삭제";
  newRemove.appendChild(removeBtn);

  // 삭제 버튼 클릭 시 해당 행을 삭제하는 이벤트 처리
  removeBtn.addEventListener("click", () => {
    newRow.remove();
  });

  // 생성한 셀들을 행에 추가
  newRow.appendChild(newBookNum);
  newRow.appendChild(newCategory);
  newRow.appendChild(newBookName);
  newRow.appendChild(newBookPrice);
  newRow.appendChild(newRemove);

  // 테이블에 새로운 행 추가
  const tableBody = document.getElementById("book-list-tbody");
  tableBody.appendChild(newRow);

  // 입력 필드 초기화
  document.getElementById("category").value = "";
  document.getElementById("bookname").value = "";
  document.getElementById("bookprice").value = "";

  alert("도서가 성공적으로 등록되었습니다.");
}

// 도서 목록을 반환하는 함수
function getBookList(){
  const table = document.getElementById("book-list-tbody");  // 테이블 가져오기
  const rows = table.getElementsByTagName("tr"); // 테이블의 모든 행 가져오기
  const bookArr = []; // 도서 목록을 저장할 배열

  // 각 행을 순회하면서 도서 정보를 추출하여 배열에 저장
  for(let row of rows){
    
    // 행의 모든 셀(td) 가져오기
    const cells = row.getElementsByTagName("td");

    // 도서 정보를 객체로 저장
    const book = {
      no: cells[0].textContent, // 도서번호
      category: cells[1].textContent, // 카테고리
      bookname: cells[2].textContent, // 도서명
      bookprice: cells[3].textContent // 가격
    }

    bookArr.push(book);  // 배열에 도서 객체 추가
  }

  return bookArr; //도서 목록 배열 반환
}

// 도서 목록을 정렬하는 함수
function sortBookList(){

  // 선택된 값을 가져오기
  const select = document.getElementById("sort-select");
  const sortType = select.value;
  console.log("선택된 정렬 방식:", sortType);

  // 선택된 값이 없다면 함수 종료
  if(sortType == ""){
    return;
  }

  // 도서 목록 가져오기
  let bookList = getBookList();

  
  // 도서목록을 가격을 기준으로 오름차순 정렬
  if(sortType == "ascending"){

    // 꺼낸 값을 형변환 해야함 string -> number
    // '원' 안떼어도 됨 '1000원'은 숫자로 시작하기 때문에 숫자부분만 변환됨
    // '1000원' -> 1000
    bookList.sort((book1, book2)=>{
      return parseInt(book1.bookprice) - parseInt(book2.bookprice);
    });

    // 내림차순 큰값 -> 작은거 
  } else if(sortType == "descending"){
    bookList.sort((book1, book2)=>{
      return parseInt(book2.bookprice) - parseInt(book1.bookprice);
    });
  }
  showBookList(bookList);
}

// 도서 목록을 화면에 다시 출력하는 함수
function showBookList(list){

  const tableBody = document.getElementById("book-list-tbody");

  // tbody 내용을 초기화
  // 또는 tr 태그를 찾아서 하나씩 삭제
  tableBody.innerHTML = '';

  // 다시 새롭게 행 추가하기
  for(let book of list){
    const newRow = document.createElement("tr");

    const newBookNum = document.createElement("td");
    newBookNum.textContent = book.no;

    const newCategory = document.createElement("td");
    newCategory.textContent = book.category;

    const newBookName = document.createElement("td");
    newBookName.textContent = book.bookname;

    const newBookPrice = document.createElement("td");
    newBookPrice.textContent = book.bookprice;

    const newRemove = document.createElement("td");
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "삭제";
    newRemove.appendChild(removeBtn);

    // 삭제버튼 클릭시 요소 삭제
    // HTML에 행을 동적으로 추가하기 때문에 행이 만들어질 때 버튼 이벤트를 동적으로 처리
    removeBtn.addEventListener("click", () => {
      newRow.remove();
    });

    // 새로운 셀들을 행에 추가
    newRow.appendChild(newBookNum);
    newRow.appendChild(newCategory);
    newRow.appendChild(newBookName);
    newRow.appendChild(newBookPrice);
    newRow.appendChild(newRemove);

    // 테이블에 새로운 행 추가
    tableBody.appendChild(newRow);
  }

}

// 특정 도서를 검색하는 함수
function searchBook(){
  const search = document.getElementById("search-input").value;

  if(search.trim() === ""){
    alert("입력된 값이 없습니다.");
    return;
  }

  let bookList = getBookList();

  // 특정한 조건을 만족하는 요소만 추출
  // false를 반환하는 요소는 제거하고 새로운 배열을 반환
  let filterList = bookList.filter((book)=>{
    return book.bookname.indexOf(search)!=-1; //boolean
  });

  showBookList(filterList);
}