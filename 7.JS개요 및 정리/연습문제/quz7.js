// Q. 3번문제를 함수로 변경하세요.

const func = (a, b) => { // 두 수를 매개변수로 전달받기
    for(let i =0; i < b; i++){
        let result = '';
        for(let j=0; j<a; j++){
            result = result + '*';
        }
        console.log(result);
    }
}
func(5, 3); //직사각형 만들기
func(4, 4); //정사각형 만들기
