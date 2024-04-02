// 내 풀이
function solution(age) {
  const tempObj = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
  };

  return [...age.toString()].map((v) => tempObj[v]).join("");
}

// 다른 사람 풀이
function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}
