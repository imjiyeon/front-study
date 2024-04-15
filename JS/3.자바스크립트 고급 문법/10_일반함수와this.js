/* this 키워드 */

const people = {
    name: 'gildong',
    say: function () {
        console.log(this);
    }
}

people.say(); //호출한쪽: people

const sayPeople = people.say;
sayPeople(); //호출한쪽: 전역(global)