/* for-in문 */
const arr = ['사과', '바나나', '딸기'];
for (const index in arr) {
  // 배열을 순회하면서 인덱스를 꺼냄
  console.log(index + ", " + arr[index]);
}

const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    // 객체을 순회하면서 키를 꺼냄
    console.log(key); // a, b, c
}

const person = { name: "둘리", age: 20, phone: "010-1234-5678" };
for(const key in person){
  console.log(key, person[key]);
}

/* for-of문 */
for (const value of arr) {
  // 배열을 순회하면서 값을 꺼냄
  console.log(value);
}

// 문자열에도 사용 가능
const str = "hello";
for (const char of str) {
    console.log(char); // h, e, l, l, o
}

// 차이점
// for-in: 객체와 배열에 사용 가능. 키 또는 인덱스를 꺼냄
// for-of: 배열만 사용 가능. 값을 꺼냄
