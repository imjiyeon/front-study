// 배열에 있는 모든 숫자를 더해서 합를 구하세요

// 배열 생성
const arr = [1, 'aa', true, 5, 10];
// 합계를 저장할 변수
let sum = 0;

// 배열의 요소 중에서 number만 찾기
for (let i = 0; i < arr.length; i++) {

    // typeof 함수를 사용해서 tpye이 number인 요소 찾기
    let type = typeof arr[i];
    console.log(arr[i] + '의 타입은 ' + type + ' 입니다');

    if (type == 'number') {
        sum = sum + arr[i];
    }
}

console.log('합계:', sum); // 16