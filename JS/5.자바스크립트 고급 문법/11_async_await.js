// async/await: 비동기함수 호출 후 응답이 올때까지 대기
// await을 쓰는 함수 앞에는 async를 붙여야함

async function myFunction() {
  // get 메소드를 사용하여 데이터 조회 요청
  const res1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  // 응답이 올때까지 대기하고, 응답받은 데이터를 json형식으로 파싱
  const res1Json = await res1.json();
  console.log(res1Json);

  // put 메소드를 사용하여 데이터 수정 요청
  // JSON.stringify: 데이터를 json형식으로 만들어서 전달
  const res2 = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
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
  const res2Json = await res2.json();
  console.log(res2Json);
}

myFunction();
