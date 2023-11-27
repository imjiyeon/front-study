// Q. 4번문제를 함수로 변경하세요.

const func = (arr) => {
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
