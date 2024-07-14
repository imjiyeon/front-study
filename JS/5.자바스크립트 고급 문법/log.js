// 모듈: 변수나 함수를 다른 파일에서 사용할 수 있게 하는 방법

// export: 변수나 함수 앞에 붙이면 외부에 공개됨
export function log(message) {
  console.log(message);
}

export function error(message) {
  console.error(message);
}
