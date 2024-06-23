//Set: 배열처럼 값들을 저장하는 객체
//set은 중복값 저장안됨

var mySet = new Set();
mySet.add(1); //새로운 데이터 추가
mySet.add(2);
mySet.add(3);
mySet.add(1); //이미 1이란 값이 저장되어 있기 때문에 추가안됨 // 3

console.log(mySet.size); //3
console.log(mySet);

var result = mySet.has(1); //값이 있는지 확인
console.log(result); //true

mySet.delete(2); //특정 데이터(값) 삭제
console.log(mySet);

//set에 저장되어 있는 모든 데이터 읽기
mySet.forEach(function (item) {
  console.log(item);
});

mySet.clear(); //저장되어 있는 모든 데이터를 삭제
