/* 함수에서 데이터 상속받기 */

// 프로토 타입을 사용하는 이유
function person() {
    this.eyes = 2;
}
let kim1  = new person(); //새로운 객체 생성
let park1 = new person();
//kim과 park이 eyes,nose를 각각 가지고 있으므로 메모리에 총 2개가 할당됨

function person() {};
person.prototype.eyes = 2; //프로토타입에 프로퍼티 추가
var kim2  = new person(); 
var park2 = new person();
//person의 프로토타입 객체는 한번만 생성되므로 메모리에 1개가 할당됨
//그리고 kim과 park이 eyes를 공유해서 사용함
