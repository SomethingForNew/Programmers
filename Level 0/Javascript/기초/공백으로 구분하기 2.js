// 내 제출
function solution(my_string) {
  return my_string.split(" ").filter((v) => v !== "");
}

/**
 * 다른 사람 풀이 1
 * 빈값이 아닌걸 비교하지 않고, 값이 있는 것만 filter
 */

// function solution(my_string) {
//   return my_string.split(" ").filter((a) => a);
// }

/**
 * 다른 사람 풀이 2
 * split(" ")으로 공백을 하나씩 자르지 않고,
 * (/\s+/g) 정규식을 통해 공백을 통으로 인식 후 자르기
 */

// function solution(my_string) {
//   return my_string.split(/\s+/g).filter((e) => e);
// }
