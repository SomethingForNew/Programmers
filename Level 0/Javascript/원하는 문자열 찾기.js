function solution(myString, pat) {
  const base = myString.toLowerCase();
  const pStr = pat.toLowerCase();

  return base.includes(pStr) ? 1 : 0;
}
