/* var를 사용하지 않는 이유 */

// let을 사용해서 변수 선언
console.log(puppy); //변수를 선언하기 전에 사용할 수 없음
let puppy = "cute"; //전역 변수
{
  let puppy = "so cute"; //지역변수
}
console.log(puppy); // cute

// var를 사용해서 변수 선언
console.log(cat); //변수를 선언하기 전에 사용할 수 있음
var cat = "cute";
{
  var cat = "so cute"; //블록스코프로 전역변수와 지역변수를 구분할 수 없음
}
console.log(cat); // so cute

// var 키워드는 호이스팅, 유효범위 등 다양한 이슈가 있어 사용하는 것을 권장하지 않음
