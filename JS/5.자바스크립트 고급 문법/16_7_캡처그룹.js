//문자열 "2024-08-27"에서 연도, 월, 일을 각각 나누어 추출한다.
let str8 = "2024-08-27";

//\d: 숫자
//{숫자}: 앞에 패턴이 지정된 횟수만큼 반복됨
//(): 캡처 그룹으로, 일치하는 부분만 문자열로 묶어서 추출
//(\d{4}): 첫번째 그룹 (연도)
//(\d{2}): 두번째 그룹 (월)
//(\d{2}): 셋번째 그룹 (일)
let dateParts = str8.match(/(\d{4})-(\d{2})-(\d{2})/); //숫자4개-숫자2개-숫자2개

console.log(dateParts); 

// ["2024-08-27", "2024", "08", "27"]
// 전체 문자열, 첫번째 그룹, 두번째 그룹, 세번째 그룹