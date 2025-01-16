/*Date문제*/

// Q9. 현재 날짜와 시간를 다음과 같이 출력하세요.
const now = new Date();
const date =
  now.getFullYear() + "년 " + (now.getMonth() + 1) + "월 " + now.getDate() + "일";
const time = now.getHours() + "시 " + now.getMinutes() + "분 " + now.getSeconds() + "초";

console.log("현재 시간:", date + " " + time);

// Q10. 현재 시간에서 1시간 30분 후의 시간을 출력하세요.
const currentTime = new Date();

// 1시간 30분 더하기
currentTime.setHours(currentTime.getHours() + 1);
currentTime.setMinutes(currentTime.getMinutes() + 30);

console.log("1시간 30분 후의 시간:", currentTime.toLocaleString());
