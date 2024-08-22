//배열의 요소들 중 숫자로 취급할 수 있는 값들을 모두 더한 합을 출력하세요.
// isNaN: 문자열이 숫자로 변환가능한지 확인하는 함수

const func = function (arr) {
  let sum = 0;
  for (let v of arr) {
    if (!isNaN(v)) {
      if(typeof v == "number" || typeof v == "boolean"){
        sum = sum + v; //1, true(1), 10
      } else if (typeof v == "string") {
        sum = sum + parseInt(v); //"5"
      } 
    }
  }

  console.log(sum);
};

const arr = [1, "aa", true, "5", 10];
func(arr);
