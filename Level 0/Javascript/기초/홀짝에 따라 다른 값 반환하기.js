function solution(n) {
    const answerArr = [];
    
    if(n % 2 !== 0) {
        for(let i = 1; i <= n; i++) {
            if(i % 2 !== 0) {
                answerArr.push(i);
            }
        }
        return answerArr.reduce((acc, cur) => acc + cur, 0);
    } else {
        for(let i = 1; i <= n; i++) {
            if(i % 2 === 0) {
                answerArr.push(i);
            }
        }
        return answerArr.reduce((acc, cur) => acc + cur ** 2, 0);
    }
    
}