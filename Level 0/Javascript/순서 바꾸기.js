function solution(num_list, n) {
  // 내 풀이
  const a = num_list.slice(0, n);
  const b = num_list.slice(n);
  const c = [...b, ...a];

  return c;

  // 다른사람 풀이
  // num_list.push(...num_list.splice(0, n));
  // return num_list;
}
