// 내 풀이
function solution(myStr) {
  const answer = myStr
    .replace(/[abc]/g, " ")
    .split(/\s+/g)
    .filter((v) => v !== "");
  return answer.length > 0 ? answer : ["EMPTY"];
}

// 다른 사람의 풀이
function solution(myStr) {
  return myStr.match(/[^a-c]+/g) || ["EMPTY"];
}
