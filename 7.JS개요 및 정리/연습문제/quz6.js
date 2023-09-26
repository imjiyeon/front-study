// Q. 3번문제를 함수를 사용하여 호출하는 형태로 바꾸세요

// 정답
function func(a, b){
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
