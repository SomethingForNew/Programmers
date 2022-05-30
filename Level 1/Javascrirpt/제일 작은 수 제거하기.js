function solution(arr) {
    const i = arr.indexOf(Math.min.apply(null, arr));
    arr.splice(i, 1);
    return arr.length === 0 ? [-1] : arr;
}