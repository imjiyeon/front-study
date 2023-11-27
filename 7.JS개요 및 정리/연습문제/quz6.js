// Q. 2번문제를 함수로 변경하세요.

function fun(arr) {
    const food1 = foodList[0];
    const food2 = foodList[foodList.length - 1];
    const result = food1 + ' ' + food2;

    return result; //결과반환
}

const foodList = ['Pizza', 'Hamburger', 'Chicken', 'Steak'];
console.log(fun());