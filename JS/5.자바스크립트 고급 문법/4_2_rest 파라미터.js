// rest 파라미터 활용

// 단어 여러개를 입력 받아 하나의 문장으로 만드는 함수를 정의한다.
// 단, 첫 번째 단어는 무시하고 나머지 단어들로만 문장을 만든다.

function func(firstWord, ...words) {
  // 배열의 join 함수를 사용하여 모든 요소를 연결
  // 구분자는 공백
  let sentence = words.join(" ");
  console.log(sentence);
}

func("Hello", "this", "is", "JavaScript"); // "this is JavaScript" 출력
func("Hello", "this", "is", "HTML"); // "this is HTML" 출력
