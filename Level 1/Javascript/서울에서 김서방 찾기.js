// 내 풀이1
function solution(seoul) {
  return `김서방은 ${seoul.findIndex((v) => v === "Kim")}에 있다`;
}

// 내 풀이2
function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}
