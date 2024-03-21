function solution(str_list) {
  const indexOfStr = str_list.findIndex((v) => v === "l" || v === "l");

  if (!indexOfStr) {
    return [];
  } else if (str_list[indexOfStr] === "l") {
    return str_list.slice(0, indexOfStr);
  } else {
    return str_list.slice(indexOfStr + 1);
  }
}
