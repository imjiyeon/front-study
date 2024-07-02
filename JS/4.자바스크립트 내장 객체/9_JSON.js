//JSON: 데이터를 전송할때 사용하는 데이터 형식 (ex. json, xml ..)
//json과 자바스크립트 객체의 차이점: 자바스크립트의 키는 ""를 꼭 안써도됨

//자바스크립트의 객체
var data = {
  employees: [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Anna", lastName: "Smith" },
    { firstName: "Peter", lastName: "Jones" },
  ],
};

var stringValue = JSON.stringify(data); //자바스크립트 객체를 문자열로 전환

//json
var text =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var obj = JSON.parse(text); //JSON문자열을 자바스크립트 객체로 변환
