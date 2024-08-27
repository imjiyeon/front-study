// 모듈: 변수나 함수를 다른 파일에서 사용할 수 있게 하는 방법

// export: 변수나 함수 앞에 붙여서 외부에서 사용할 수 있도록 내보내기
export function log(message) {
  console.log(`MSG: ${message}`);
}

export function error(message) {
  console.error(`ERROR: ${message}`);
}
