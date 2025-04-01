// 배열에서 숫자로 취급할 수 있는 값을 모두 더해서 합계 구하기

const arr = [1, "aa", true, "5", 10];

let sum = 0;

for (let v of arr) {

  // isNaN: 문자열이 숫자로 변환 가능한지 확인하는 함수
  if (!isNaN(v)) {
    if(typeof v == "number"){ 
      sum = sum + v; 
    } else if (typeof v == "string") {  //"5"
      sum = sum + parseInt(v); 
    } else if (typeof v == "boolean"){
      sum = sum + v;
    }
  }

}

console.log(sum); //합계