// Q4. 배열에 있는 모든 숫자를 더해서 합를 구하세요
// 결과: 16

const arr = [1, 'aa', true, 5, 10];
let sum = 0;

for (let i = 0; i < arr.length; i++) {

    let type = typeof arr[i];
    console.log(arr[i] + '의 타입은 ' + type + ' 입니다');

    if (type == 'number') {
        sum = sum + arr[i];
    }
}

console.log('합계는 ' + sum + ' 입니다!');