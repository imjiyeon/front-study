//Q1.사용자의 이름과 인삿말을 입력받아 인사를 만드는 함수를 정의하세요.
// 디폴트 파라미터
function greet(name, greeting = "안녕하세요") {
  return `${greeting}, ${name}님!`;
}

console.log(greet("철수", "반갑습니다")); //"반갑습니다, 철수님!" 출력
console.log(greet("훈이")); //"안녕하세요, 훈이님!" 출력

//Q2.학생의 영어, 수학, 국어 점수를 입력받아 평균점수를 출력하는 함수를 정의하세요.
// 디폴트 파라미터
function calculateGrade(name, eng = 0, math = 0, kor = 0) {
  // 평균 점수 계산
  const sum = eng + math + kor;
  const avg = sum / 3;

  // 평균 점수는 소수점 2번째 자리까지만 출력
  console.log(`${name}님의 평균 성적은 ${avg.toFixed(2)}점입니다.`);
}

calculateGrade("철수", 85, 90, 78); //"철수님의 평균 성적은 84.33점입니다." 출력
calculateGrade("훈이", 80); //"훈이님의 평균 성적은 26.67점입니다." 출력

// Q3. 사람의 정보를 입력받아 출력하는 함수를 정의하세요.
// rest 파라미터
function printPerson(name, age, ...hobbies) {
  console.log(
    `${name}의 나이는 ${age}살이고, 취미는 ${hobbies.join(", ")}입니다.`
  );
}

printPerson("맹구", 5, "축구", "독서", "영화 감상");
//"맹구의 나이는 5살이고, 취미는 축구, 독서, 영화 감상입니다." 출력

printPerson("유리", 5, "소꼽놀이");
//"유리의 나이는 5살이고, 취미는 소꼽놀이입니다." 출력