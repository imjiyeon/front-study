//얇은 복사

// 객체 안에 객체가 있는 경우
let origin = {
  name: "짱구",
  age: 5,
  favoriteFood: {
    first: "햄버거",
    second: "피자",
  },
};
let copy = { ...origin };

copy.favoriteFood.first = "마라탕";
console.log(origin.favoriteFood); //원본데이터에 영향을 끼침
// 원본데이터를 완벽히 복사 못함
// ori의 favoriteFood 프로퍼티도 참조타입이라 주소가 복사됨

//깊은 복사
//stringify(): 객체를 json데이터 포맷의 텍스트로 변경. 이때 객체의 주소값은 담지 않음
let copy2 = JSON.stringify(origin);
//parse(): 다시 원래 타입으로 변경. 이때 새로운 주소로 객체가 생성됨
let deepCopy = JSON.parse(copy2);

deepCopy.favoriteFood.first = "탕후루";
console.log(origin.favoriteFood);
