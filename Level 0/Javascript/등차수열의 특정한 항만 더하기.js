function solution(a, d, included) {
    const tempArr = [a];
    
    for(let i = 1; i < included.length; i++) {
        tempArr.push(tempArr[i - 1] + d);
    }
    
    return tempArr.reduce((acc, cur, idx) => included[idx] ? acc + cur : acc, 0);
}