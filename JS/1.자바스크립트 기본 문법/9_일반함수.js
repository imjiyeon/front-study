/* 일반함수 */

//함수 선언
function hello() { //외부에서 입력받는 값을 매개변수로 선언, 리턴타입은 없음
    console.log('안녕하세요~'); //중괄호 안에 실행할 코드를 작성
}

//함수 호출
hello(); //함수이름();

//반환값이 있는 함수 선언
function sum(x, y) { 
    return x + y; //데이터가 반환되며 함수가 종료됨
}

const result = sum(2, 3); //반환 받은 값을 변수에 저장
console.log(result);