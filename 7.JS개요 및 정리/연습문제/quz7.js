// Q6. 4번문제를 함수를 사용하여 호출하는 형태로 바꾸세요

// 정답
function func(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if((typeof arr[i]) == 'number'){
            sum =  sum + arr[i];
        }
    }
    console.log(sum);
}

const arr = [1,'aa', true, 5, 10];
func(arr);
