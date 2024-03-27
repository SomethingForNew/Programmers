function solution(arr, delete_list) {
  return arr.filter((v, _) => !delete_list.includes(v));
}
