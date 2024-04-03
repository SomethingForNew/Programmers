function solution(emergency) {
  const aoo = [...emergency].sort((a, b) => b - a);

  return emergency.map((v) => aoo.indexOf(v) + 1);
}
