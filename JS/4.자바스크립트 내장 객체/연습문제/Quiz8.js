//문자열에서 각 단어의 첫 글자를 대문자로 변환하세요.

//버전1
var text = "hello world welcome to programming";
//공백을 기준으로 분할하여 배열로 변환
var arr = text.split(" ");
var newArr = [];

//각 단어의 첫글자만 대문자로 변경하고, 다시 새로운 배열에 추가
for (let word of arr) {
  newArr.push(word.charAt(0).toUpperCase() + word.slice(1));
}
console.log(newArr); 
//[ 'Hello', 'World', 'Welcome', 'To', 'Programming' ]

// 새로운 배열을 공백을 구분자로 문자열로 합치기
var newText = newArr.join(" ");
console.log(newText); //Hello World Welcome To Programming

//버전2
var text = "hello world welcome to programming";
//공백을 기준으로 분할하여 배열로 변환
var arr = text.split(" ");
var newText = "";

for (let word of arr) {
  //각 단어를 순회하면서 단어의 첫글자만 대문자로 변경
  //한글자씩 새로운 텍스트에 연결
  for(let i in word){
    if(i==0){
      //첫글자를 대문자로 변경하여 연결
      newText = newText + word[i].toUpperCase();
    }else{
      //첫글자가 아닌경우 원래 문자 그대로 연결
      newText = newText + word[i];
    }
  }
  //단어와 단어 사이에 공백 추가
  newText = newText + " ";
}

console.log(newText); //Hello World Welcome To Programming