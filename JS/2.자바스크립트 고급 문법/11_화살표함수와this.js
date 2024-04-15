/* 화살표함수와 this 키워드 */

//상위스코프의 this를 가져온다
// console.log(this);

const people = {
    name: 'gildong',
    age: 10,
    say: () => { //화살표 함수안에 this는 없다
        console.log(this); 
    }
}

people.say();
const sayPeople = people.say;
sayPeople();