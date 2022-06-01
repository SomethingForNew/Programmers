function solution(n){
    return n.toString().split("").map(v => Number(v)).reduce((acc, curr) => {return acc + curr});
}