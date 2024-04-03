// 내 풀이
function solution(order) {
  let cnt = 0;

  [...order.toString()].map((v) => {
    if (v === "3" || v === "6" || v === "9") {
      cnt += 1;
    }
  });

  return cnt;
}

// 다른 사람 풀이
function solution(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}
