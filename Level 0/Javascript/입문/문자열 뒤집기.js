// 내 풀이
function solution(my_string) {
  return my_string.split("").reverse().join("");
}

// 다른 사람 풀이
function solution(my_string) {
  return [...my_string].reverse().join("");
}

// TODO: split과 스프레드의 차이는? 어떤게 더 좋은지는???
