// 타이머 실행시 생성되는 Interval ID를 저장할 배열
let intervalIdArr = [];

// 문제점: 브라우저를 새로고침하거나 닫으면 타이머가 종료됨
// 브라우저를 다시 열었을 때 타이머가 유지되도록 수정 필요

// 6. 브라우저가 처음 로드시, 스토리지에 저장된 날짜를 꺼내고
// 저장된 날짜가 있다면 타이머를 바로 시작
let savedDate = localStorage.getItem("saved-date");

if (savedDate) {
  console.log(savedDate);
  start(savedDate);
} else {
  console.log("저장된 날짜가 없습니다..");
}

// 1.사용자가 입력한 D-Day를 가져오는 함수
function getDday () {
  const year = document.getElementById("year-input").value;
  const month = document.getElementById("month-input").value;
  const date = document.getElementById("date-input").value;
  const dday = `${year}-${month}-${date}`;

  return dday;
};

// 2.남은 시간을 계산하고 화면에 표시하는 함수
// dday 매개변수는 나중에 추가..
function count (dday) {
    // 디데이 가져오기
    // const dday = getDday();

    // 현재 시간 가져오기
    const now = new Date();

    // 목표날짜를 자정으로(00:00:00) 설정
    // setHours 함수로 들어가서 선택적(optional) 파라미터 보기
    const target = new Date(dday).setHours(0, 0, 0, 0);

    // ms -> s 단위로 변경
    const remaining = (target - now) / 1000;

    // 잘못된 날짜일 경우 함수를 종료
    if (remaining <= 0 || isNaN(remaining)) {
      console.log("잘못된 날짜가 들어왔습니다..");
      reset(); //타이머 초기화는 나중에 추가..
      return;
    }
    
    // 남은 시간을 (일, 시간, 분, 초)로 계산하기
    // remaining은 초 단위이며, 소수점 이하를 버리기 위해 Math.floor 사용
    // 예: remaining = 124929.943로 설정
    // 124929 / 3600 ≈ 34시간 -> 1일 10 시간
    // 124929 / 60 ≈ 2082분 -> % 60 = 42분
    // 124929 % 60 = 9초
    const remainObj = {
      date: Math.floor(remaining / 3600 / 24), 
      hour: Math.floor(remaining / 3600) % 24, //하루를 초과하는 나머지 시간
      min: Math.floor(remaining / 60) % 60, //1시간을 초과한 나머지 분
      sec: Math.floor(remaining) % 60, //1분을 초과한 나머지 초
    };

    console.log(remainObj.date, remainObj.hour, remainObj.min, remainObj.sec);

    // 남은시간을 화면에 표시
    document.getElementById("day").textContent = remainObj.date;
    document.getElementById("hour").textContent = remainObj.hour;
    document.getElementById("min").textContent = remainObj.min;
    document.getElementById("sec").textContent = remainObj.sec;
};

//3.타이머 시작 함수
//prevDate는 나중에 처리..
//인자에 따라 조건문 처리
//전달받은 인자가 있다면 브라우저 로드 시 타이머가 실행된 것
//없으면 사용자가 새로운 D-Day를 입력한 후 실행된 것
function start (prevDate) {
  /* 나중에 추가 */
  let dday = null;
  console.log(prevDate);

  // 버튼을 눌렀다면 prevDate는 undefined
  // 사용자가 입력한 날짜 가져오기
  // 새로운 디데이를 스토리지에 교체
  if(prevDate === undefined){
    dday = getDday();
    localStorage.setItem('saved-date', dday);
  } else {
    // 이전에 저장한 날짜를 사용
    dday = prevDate;
  }
  /* 여기까지 */

  // let dday = getDday();
  // (1) 반복문으로 남은 시간 변경
  // for(let i=0; i<10; i++){
  //   count();
  // }
  // 문제점: 반복문이 너무 빠르게 실행되서 원하는 결과가 안나옴

  // (2) setInterval 함수를 사용하여 1초 간격으로 타이머 설정
  // 타이머 ID 반환
  const intervalId = setInterval(()=>{
    count(dday);
  }, 1000);
  // 이제 타이머 처럼 동작함
  // 사용이 끝나면 타이머를 종료해야함

  // 생성된 타이머 아이디를 배열에 추가
  intervalIdArr.push(intervalId);
};

// 4.카운터를 중지하는 함수
function stop () {
  // 모든 타이머 중지
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
  intervalIdArr = []; //배열 비우기
};

// 5.카운터를 초기화하는 함수
function reset () {
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
  intervalIdArr = [];

  // 남은 시간을 0으로 초기화
  document.getElementById("day").textContent = "0";
  document.getElementById("hour").textContent = "0";
  document.getElementById("min").textContent = "0";
  document.getElementById("sec").textContent = "0";

  // 스토리지에서 날짜 삭제 (나중에 추가..)
  localStorage.removeItem('saved-date');
};