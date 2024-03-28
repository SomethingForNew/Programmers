// 내 풀이
function solution(picture, k) {
  const answer = [];

  const repeatItem = picture.map((v) => {
    return v
      .split("")
      .map((v) => v.repeat(k))
      .join("");
  });

  for (let i = 0; i < repeatItem.length; i++) {
    for (let j = 0; j < k; j++) {
      answer.push(repeatItem[i]);
    }
  }

  return answer;
}

/**
 * 다른 사람 풀이
 * 이 방식이 좋은 건지는 아직 잘 모르겠음...
 */
const solution = (picture, k) =>
  Array(picture.length * k)
    .fill(0)
    .map((v, i) => picture[~~(i / k)].replace(/./g, (v) => v.repeat(k)));
