// Q. 4번문제를 함수로 변경하세요.

const func = (arr) => { //매개변수로 배열 전달받기
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if((typeof arr[i]) == 'number'){
            sum =  sum + arr[i];
        }
    }

    return sum; //합계 반환
}

const arr1 = [1,'aa', true, 5, 10];
console.log('첫번째 배열의 합계: ' + func(arr1)); //결과 출력

const arr2 = ['bb', true, 55, 7, false];
console.log('두번째 배열의 합계: ' + func(arr2)); //결과 출력