// async/await: 비동기함수에서 API를 호출이 완료될 때까지 기다리는 방법

// await을 쓰는 함수 앞에는 반드시 async를 붙여야 한다
async function func1() {
  // get 메소드를 사용하여 데이터 조회 요청
  // await: 응답이 올때까지 대기하고, 응답받은 데이터를 json형식으로 파싱
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const resJson = await response.json(); //json 데이터를 객체로 변환
  console.log(resJson); //변환한 데이터 출력
}

func1();

async function func2() {
  // put 메소드를 사용하여 데이터 수정 요청
  // JSON.stringify: 객체를 json문자열로 변환
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const resJson = await response.json();
  console.log(resJson);
}

func2();

//async/await을 사용하면 then 체인을 쓰는 것보다 더 깔끔하게 코드를 작성할 수 있다
