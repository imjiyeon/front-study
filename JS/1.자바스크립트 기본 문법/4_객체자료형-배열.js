/* Array(배열) */

const arr1 = ['Apple', 'Banana', 'Cherry'];

//배열의 값 꺼내기
console.log(arr1[0]); //인덱스 사용
console.log(arr1[1]); 
console.log(arr1[2]); 

const arr2 = ['a','b',1,2,true]; //자료형이 달라도 함께 저장 가능
console.log(arr2); // [ 'a', 'b', 1, 2, true ]
arr2.push(3); //배열의 push메소드로 새로운 요소 추가
console.log(arr2); // [ 'a', 'b', 1, 2, true, 3]

// const인데 왜 값을 변경할 수 있을까? 
// objArr 변수에는 주소만 저장이 되어있고 실제 요소들은 힙영역에 저장이되어있음
// 따라서 주소가 변경되지 않으므로 값을 추가할 수 있음

//객체 배열
const objArr = []; //변수 선언하고 빈배열로 초기화
objArr.push({ name: 'Americano' }); 
objArr.push({ name: "Latte" }); 
console.log(objArr); //배열 출력
console.log(objArr[0]); //첫번째 객체 출력
console.log(objArr.length); //배열의크기는 2