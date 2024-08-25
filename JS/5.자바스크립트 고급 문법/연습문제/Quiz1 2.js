//Q.사용자의 이름과 인삿말을 입력받아 인사를 만드는 함수를 정의하세요.
function greet(name, greeting = "안녕하세요") {
  return `${greeting}, ${name}님!`;
}

console.log(greet("철수", "반갑습니다")); //"반갑습니다, 철수님!" 출력
console.log(greet("훈이")); //"안녕하세요, 훈이님!" 출력

//Q.학생의 영어, 수학, 국어 점수를 입력받아 평균점수를 출력하는 함수를 정의하세요.
function calculateGrade(name, eng = 0, math = 0, kor = 0) {
  // 평균 점수 계산
  const sum = eng + math + kor;
  const avg = sum / 3;

  // 평균 점수는 소수점 2번째 자리까지만 출력
  console.log(`${name}님의 평균 성적은 ${avg.toFixed(2)}점입니다.`);
}

calculateGrade("철수", 85, 90, 78); //"철수님의 평균 성적은 84.33점입니다." 출력
calculateGrade("훈이", 80); //"훈이님의 평균 성적은 26.67점입니다." 출력
