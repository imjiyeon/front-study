// 배열의 요소들 중 숫자로 취급할 수 있는 값들을 모두 더한 합을 출력하세요.
// isNaN: 문자열이 숫자로 변환가능한지 확인하는 함수

const arr = [1, "aa", true, "5", 10];

let sum = 0;

// v: 1, "aa", true, "5", 10 
for (let v of arr) {

  // 배열의 요소를 숫자로 변환할 수 있는지 확인
  if (!isNaN(v)) {
    console.log(v, "변환가능");
    if(typeof v == "number" || typeof v == "boolean"){ //1, true(1), 10
      sum = sum + v; 
    } else if (typeof v == "string") {  //"5"
      sum = sum + parseInt(v); 
    } 
  }

}

console.log(sum); //합계