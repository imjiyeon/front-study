/*Date문제*/

// Q13. 현재 날짜와 시간를 다음과 같이 출력하세요.
const now = new Date();
const date =
  now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
const time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

console.log("현재 날짜와 시간:", date + " " + time);

// Q14. 2024월 1월 1일 부터 10일 후의 날짜를 계산하세요.
const startDate = new Date("2024-01-01");
const add = 10;

// 날짜 계산
startDate.setDate(startDate.getDate() + add);
console.log("10일 후 날짜:", startDate.toLocaleString());

// Q15. 현재 시간에서 1시간 30분 후의 시간을 출력하세요.
const currentTime = new Date();

// 1시간 30분 더하기
currentTime.setHours(currentTime.getHours() + 1);
currentTime.setMinutes(currentTime.getMinutes() + 30);

console.log("1시간 30분 후의 시간:", currentTime.toLocaleString());
