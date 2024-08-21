//Date: 날짜와 시간을 다루는 객체

// 현재 날짜와 시간을 기준으로 Date 객체 생성
var now = new Date();
console.log(now); // 현재 시간

// 특정 날짜와 시간을 지정해서 Date 객체 생성 (연도, 월, 일, 시, 분, 초, 밀리초)
var d = new Date(2024, 1, 1, 10, 10, 10, 0);
console.log(d); // 2024년 2월 1일 10:10:10 (월은 0부터 시작하므로 1은 2월)

// 시간대가 안맞음..
console.log(d.toLocaleString()); //로컬시간대로 변경

// 문자열을 사용하여 Date 객체 생성
var d = new Date("October 13, 2024 11:11:11");
console.log(d.toLocaleString()); // 2024년 10월 13일 11:11:11

var d = new Date("2024-10-13T11:11:11");
console.log(d.toLocaleString());

// 일과 시간 변경
d.setDate(15);
d.setHours(15);
console.log(d.toLocaleString());

//정적 메소드로 현재 시간(밀리초 단위) 출력
console.log(Date.now());

// 현재 시간으로 Date 객체 생성 후 연도, 월, 일 등을 가져오기
var d = new Date();

var year = d.getFullYear(); //연도
console.log("year", year);

var month = d.getMonth();
console.log("month", month); //월 (0부터 시작)

var date = d.getDate();
console.log("date", date); //일

var day = d.getDay(); //요일 (0: 일요일, 6: 토요일)
console.log("day", day);

var hour = d.getHours(); // 시
console.log("hour", hour);

var minute = d.getMinutes(); // 분
console.log("minute", minute);

var second = d.getSeconds(); // 초
console.log("second", second);
