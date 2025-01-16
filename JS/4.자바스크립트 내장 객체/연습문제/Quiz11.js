/*Date문제*/

// 방문 기록 배열
const visits = [
  { name: "김철수", date: "2024-08-20", purpose: "회의" },
  { name: "이영희", date: "2024-08-18", purpose: "상담" },
  { name: "박지훈", date: "2024-08-21", purpose: "회의" },
  { name: "최유리", date: "2024-08-19", purpose: "교육" },
  { name: "정민호", date: "2024-08-17", purpose: "상담" },
];

// 방문 날짜 기준으로 오름차순 정렬하기
visits.sort((a, b) => new Date(a.date) - new Date(b.date));
console.log("정렬된 방문 기록:", visits);

// 방문 목적 기준으로 필터링하기
// 방문 목적이 "회의"인 방문 기록만 포함
const filteredVisits = visits.filter((visit) => visit.purpose === "회의");
console.log("회의 목적의 방문 기록:", filteredVisits);

// 방문 기록 객체 변환하기
const formattedVisits = filteredVisits.map((visit) => {
  const dateObj = new Date(visit.date); // Date 객체로 변환

  return {
    name: visit.name,
    year: dateObj.getFullYear(),
    month: dateObj.getMonth() + 1,
    day: dateObj.getDate(),
    purpose: visit.purpose,
  };
});
console.log("형식이 변환된 방문 기록:", formattedVisits);
