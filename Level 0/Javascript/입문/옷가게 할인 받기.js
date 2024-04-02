// 내 풀이
function solution(price) {
  if (price < 100000) {
    return price;
  }

  if (price >= 100000 && price < 300000) {
    return Math.trunc(price * 0.95);
  }

  if (price >= 300000 && price < 500000) {
    return Math.trunc(price * 0.9);
  }

  if (price >= 500000) {
    return Math.trunc(price * 0.8);
  }
}

/**
 * 다른 사람 풀이
 * // TODO: 조건문에 대한 이해를 해보도록 하자
 */
function solution(price) {
  if (price >= 500000) {
    return Math.trunc(price * 0.8);
  }

  if (price >= 300000) {
    return Math.trunc(price * 0.9);
  }

  if (price >= 100000) {
    return Math.trunc(price * 0.95);
  }

  return price;
}
