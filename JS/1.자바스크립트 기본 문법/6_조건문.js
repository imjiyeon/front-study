/* if문 */
const year = 2023;

if (year == 2023) { //조건식
    console.log('정답입니다!'); //조건식을 만족하고 출력됨
}

if (year == 2024) {
    console.log('정답입니다!'); //조건을 만족한다면 첫번째 블록을 수행
} else {
    console.log('오답입니다!'); //조건을 만족하지 않는다면 두번째 블록을 수행
}

if (year == 2023) {
    console.log('year는 2023과 같습니다');
} else if (year < 2023) {
    console.log('year는 2023보다 작습니다');
} else {
    console.log('year는 2023보다 큽니다');
}

/* switch문 */
const rank = 1;
switch (rank) { // 조건값
    case 1: // 조건값과 일치하는 case문을 실행
        console.log('금메달입니다');
        break;
    case 2:
        console.log('은메달입니다');
        break;
    case 3:
        console.log('동메달입니다');
        break;
    default: // 조건이 모두 일치하지 않을 때 실행됨
        console.log('메달이 없습니다');
        break;
}