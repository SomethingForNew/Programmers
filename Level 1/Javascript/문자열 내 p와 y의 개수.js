function solution(s) {
  let p = s.toLowerCase().replaceAll("p", "");
  let y = s.toLowerCase().replaceAll("y", "");

  return p.length === y.length ? true : false;
}
