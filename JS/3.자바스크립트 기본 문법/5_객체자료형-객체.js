/* Object(객체) */

const user = {
  name: "둘리", //프로퍼티
  age: 10,
  get_name: function () {
    //함수
    console.log(this.name);
  },
};

//객체의 프로퍼티를 꺼내려면
//"오브젝트명[키]" 또는 "오브젝트명.키"를 사용
console.log(user.name); //키를 이용하여 값을 변경
console.log(user["age"]); //키를 이용하여 값을 변경
