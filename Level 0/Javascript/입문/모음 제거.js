// 내 풀이
function solution(my_string) {
  return my_string.replace(/['a','e','i','o','u']/g, "");
}

// 다른 사람 풀이
// TODO: 정규식 표현 좀 공부좀 하자
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}
