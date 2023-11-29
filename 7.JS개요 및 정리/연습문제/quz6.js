// Q. 2번문제를 함수로 변경하세요.

function func(arr) { //매개변수로 배열 받기
    const firstValue = arr[0];
    const lastValue = arr[arr.length - 1];
    const result = firstValue + ' ' + lastValue;

    console.log(result);
}

const arr1 = ['Pizza', 'Hamburger', 'Chicken', 'Steak'];
func(arr1);

const arr2 = ['Apple', 'Banana', 'Cherry'];
func(arr2);