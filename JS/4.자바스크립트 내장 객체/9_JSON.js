/* JSON문자열과 객체 사이의 변환 과정 */
//JSON: 데이터를 전송할때 사용하는 데이터 형식 (예: JSON, XML ..)
//json과 자바스크립트 객체의 차이점: 자바스크립트의 키는 ""를 꼭 안써도됨

//자바스크립트의 객체
var data = {
  employees: [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Anna", lastName: "Smith" },
    { firstName: "Peter", lastName: "Jones" },
  ],
};
console.log(typeof data); //object

//자바스크립트 객체를 JSON 형식의 문자열로 변환
var stringValue = JSON.stringify(data);
console.log(typeof stringValue); //string

//json
var text =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
console.log(typeof text); //string

//JSON 문자열을 자바스크립트 객체로 변환
var obj = JSON.parse(text);
console.log(typeof obj); //object
