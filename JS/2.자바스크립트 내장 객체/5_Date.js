//Date: 날짜와 시간을 다루는 객체

// new Date()
var now = new Date(); //사용자 브라우저의 시간으로 Date 객체 생성
console.log(now);

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
var d = new Date(2024, 1, 1, 10, 10, 10, 0); //특정 날짜,시간을 지정해서 Date 객체 생성
console.log(d);

// new Date(string)
var d = new Date("October 13, 2024 11:11:11"); //날짜 문자열로 Date 객체 생성
console.log(d);

//정적 메소드로 현재 시간 출력
console.log(Date.now());

var d = new Date(); //현재 시간으로 Date 객체 생성
var year = d.getFullYear(); //연도
console.log("year", year);

var month = d.getMonth();
console.log("month", month); //월

var date = d.getDate();
console.log("date", date); //일

var day = d.getDay(); //요일
var hour = d.getHours(); //시
var minute = d.getMinutes(); //분
var second = d.getSeconds(); //초
