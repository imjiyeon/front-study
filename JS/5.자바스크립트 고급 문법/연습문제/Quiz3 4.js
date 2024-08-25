// Q. 단어 여러개를 입력받아 하나의 문장으로 만드는 함수를 정의하세요.
// 단, 첫 번째 단어는 무시하고 나머지 단어들로만 문장을 만드세요.

function createSentence(firstWord, ...words) {
  // 나머지 단어들을 공백으로 연결하여 하나의 문장 생성
  let sentence = words.join(" ");
  return sentence;
}

console.log(createSentence("Hello", "this", "is", "JavaScript"));
// "this is JavaScript" 출력

// Q. 사람의 정보를 입력받아 출력하는 함수를 정의하세요.
function printPerson(name, age, ...hobbies) {
  console.log(
    `${name}의 나이는 ${age}살이고, 취미는 ${hobbies.join(", ")}입니다.`
  );
}

printPerson("맹구", 5, "축구", "독서", "영화 감상");
//"맹구의 나이는 5살이고, 취미는 축구, 독서, 영화 감상입니다." 출력

printPerson("유리", 5, "소꼽놀이");
//"유리의 나이는 5살이고, 취미는 소꼽놀이입니다." 출력
