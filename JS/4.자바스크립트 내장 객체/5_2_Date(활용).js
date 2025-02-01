/*Date문제*/

// 현재 날짜를 지정한 형식으로 출력하기
const now = new Date();
const date = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
console.log("현재 날짜: ", date);

// 현재 시간을 지정한 형식으로 출력하기
const time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
console.log("현재 시간: ", time);

// 2025월 1월 1일 부터 10일 후의 날짜 계산하기
const startDate = new Date("2025-01-01");

// 날짜 계산
startDate.setDate(startDate.getDate() + 10);
console.log("10일 후 날짜:", startDate.toLocaleString());
