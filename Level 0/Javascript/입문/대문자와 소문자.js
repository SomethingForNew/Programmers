function solution(my_string) {
  return [...my_string]
    .map((v) => {
      if (v === v.toLowerCase()) {
        return v.toUpperCase();
      } else {
        return v.toLowerCase();
      }
    })
    .join("");
}
