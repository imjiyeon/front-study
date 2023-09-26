/* 객체에서 데이터 상속받기 */

const animal = {
    leg: 4,
    tail: 1
}

const dog = {
    sound: 'wang'
}

dog.__proto__ = animal; //__proto__를 사용하여 animal을 부모로 지정

console.log(dog.leg); // 부모에게 물려받은 프로퍼티
console.log(dog.tail); // 부모에게 물려받은 프로퍼티
console.log(dog.sound);