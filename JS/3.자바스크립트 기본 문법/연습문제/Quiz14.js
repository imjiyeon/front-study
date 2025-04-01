// 함수
// 다양한 값으로 구성된 배열을 입력 받아, 그 중에서 문자열만 골라서 새로운 배열로 반환하는 함수를 만드세요

// 매개변수: 배열
function func(arr) {
  // 문자 요소만 담을 새 배열
  let newArr = [];
  // 배열 요소의 타입이 string이면 새배열에 추가
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      newArr.push(arr[i]);
    }
  }
  // 문자열만 담긴 새 배열 반환
  return newArr;
}
// ["apple", "banana", "cherry"]
console.log(func([1, "apple", true, "banana", 42, "cherry"]));
// ["yes", "no"] 
console.log(func([true, false, "yes", 0, "no"]));

