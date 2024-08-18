// Q. 7번문제에서 사각형을 만드는 부분을 함수로 변경하세요.

const func = (a, b) => {
  // 두 수를 매개변수로 전달받기
  for (let i = 0; i < b; i++) {
    let result = "";
    for (let j = 0; j < a; j++) {
      result = result + "*";
    }
    console.log(result);
  }
};
func(5, 3); //5*3 크기의 직사각형
func(4, 4); //4*4 크기의 정사각형
