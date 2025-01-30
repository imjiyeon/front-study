// npm install fetch

// GET 요청
// 전체 데이터 조회
// fetch("http://localhost:3000/comments")
// .then((res)=>res.json())
// // .then((json)=>console.log(json));
// .then((json)=>console.table(json));

// console.log는 배열 데이터를 축약해서 보여줘서 ...로 표시됨
// console.table를 사용하면 배열 데이터가 표형태로 출력됨

// 아이디로 조회
// fetch("http://localhost:3000/comments/1")
// .then((res)=>res.json())
// .then((json)=>console.log(json));

// 아이디로 조회
// fetch("http://localhost:3000/comments?postId=1")
// .then((res)=>res.json())
// .then((json)=>console.table(json));


// // POST 요청
// fetch("http://localhost:3000/posts",
//     {
//         method: "POST",
//         body: JSON.stringify({
//             title: "2번글",
//             author: "철수"
//         }),
//         headers: {
//             "content-type": "application/json; charset=UTF-8"
//         }
//     }
// )
// .then((res)=>res.json())
// .then((json)=>console.log(json));

// PUT 요청
// fetch("http://localhost:3000/posts/9e85",
//     {
//         method: "PUT",
//         body: JSON.stringify({
//             id: 9e85,
//             title: "철수가 쓴 글",
//             author: "철수"
//         }),
//         headers: {
//             "content-type": "application/json; charset=UTF-8"
//         }
//     }
// )
// .then((res)=>res.json())
// .then((json)=>console.log(json));

// DELETE 요청
fetch("http://localhost:3000/posts/9e85",
    { method: "DELETE" }
)


