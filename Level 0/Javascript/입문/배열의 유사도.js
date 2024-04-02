// 내 풀이
function solution(s1, s2) {
  let cnt = 0;

  s2.map((v) => {
    if (s1.includes(v)) {
      cnt += 1;
    }
  });

  return cnt;
}

// 다른 사람 풀이
// TODO: filter 를 좀 잘 활용하자
function solution(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}
