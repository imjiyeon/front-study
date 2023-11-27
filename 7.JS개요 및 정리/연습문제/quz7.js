// Q. 3번문제를 함수로 변경하세요.

const func = (a, b) => {
    for(let i =0; i < b; i++){
        let result = '';
        for(let j=0; j<a; j++){
            result = result + '*';
        }
        console.log(result);
    }
}
const a = 5, b = 3;
func(a, b);
