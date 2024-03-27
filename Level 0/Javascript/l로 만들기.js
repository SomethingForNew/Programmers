// 내 풀이
function solution(myString) {
  return [...myString].map((v) => (v < "l" ? "l" : v)).join("");
}

// 다른 사람 풀이(정규 표현식 이용)
function solution() {
  return myString.replace(/[a-k]/g, "l");
}
