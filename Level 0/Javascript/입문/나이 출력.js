// 기준년도가 계속 바뀌기 때문에 중요하지 않음
function solution(age) {
  return new Date().getFullYear() - 1 - age;
}
