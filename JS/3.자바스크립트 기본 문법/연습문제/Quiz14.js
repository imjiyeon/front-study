// 함수
// 다양한 값으로 구성된 배열을 입력 받아, 그 중에서 문자열만 골라서 새로운 배열로 반환하는 함수를 만드세요

function func(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(func([1, "apple", true, "banana", 42, "cherry"])); // ["apple", "banana", "cherry"]
console.log(func([true, false, "yes", 0, "no"])); // ["yes", "no"]
