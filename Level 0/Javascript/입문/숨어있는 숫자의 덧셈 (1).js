// 내 풀이
function solution(my_string) {
  return [...my_string.replaceAll(/[a-z, A-Z]/g, "")].reduce(
    (acc, cur) => acc + +cur,
    0
  );
}

// 다른 사람 풀이1
function solution(my_string) {
  const answer = my_string
    .replace(/[^0-9]/g, "")
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);
  return answer;
}

// 다른 사람 풀이2
function solution(my_string) {
  return [...my_string].reduce(
    (acc, cur) => (Number(cur) ? +acc + +cur : acc),
    0
  );
}
