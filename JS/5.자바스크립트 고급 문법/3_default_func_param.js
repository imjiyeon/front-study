// 함수의 파라미터에 기본값 설정하기

function say(message = "파라미터가 넘어오지 않았어요") {
  console.log(message);
}

say("안녕하세요");
say(); //전달받은 인자가 없으면 기본값을 사용함

function plus(x, y = 1) {
  console.log(x + y);
}

plus(4, 2);
plus(4); //전달받은 인자가 없으면 기본값을 사용함
