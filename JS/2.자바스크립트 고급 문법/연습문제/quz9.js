// Q. child객체에 parent객체를 상속받으세요. 
//     그리고 child객체의 성,국가,나이를 '김', '미국', 20 으로 변경하고 객체의 모든 정보를 출력하세요

// 정답
const child = {
    age: 10
}

const parent = {
    firstName: '이',
    country: '한국'
}

child.__proto__ = parent;
child.firstName = '김';
child.country = '미국';
child.age = 20;

console.log(child.firstName); // 김
console.log(child.country); // 미국
console.log(child.age); // 20
 