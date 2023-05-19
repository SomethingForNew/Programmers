function solution(arr) {
    return arr.reduce((acc, cur) => {return (acc + cur)}) / arr.length;
}