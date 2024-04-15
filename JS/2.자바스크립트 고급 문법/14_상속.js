// 객체 만들기
const animal = {
    leg: 4,
    tail: 1
}

const dog = {
    sound: 'wang'
}

dog.__proto__ = animal; //동물을 강아지의 부모로 지정

console.log(dog.leg); // 객체에 프로퍼티가 없으면 부모로 가서 찾음
console.log(dog.tail); // 부모에게 물려받은 프로퍼티
console.log(dog.sound);