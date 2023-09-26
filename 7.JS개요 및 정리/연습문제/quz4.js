// Q4. 다음 배열에 있는 숫자만 모두 더해서 합를 구하세요 
// 결과: 16

// 정답
const arr = [1,'aa', true, 5, 10];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if((typeof arr[i]) == 'number'){
        sum =  sum + arr[i];
    }
}
console.log(sum);