function solution(code) {
    let mode = 0;
    let ret = '';
    
    for(let i = 0; i < code.length; i++) {
        if(!mode) {
            if(code[i] !== '1' && i % 2 === 0) {
                ret += code[i];
            } else if(code[i] === '1') {
                mode = 1;
            }
        } else {
            if(code[i] !== '1' && i % 2 !== 0) {
                ret += code[i];
            } else if(code[i] === '1') {
                mode = 0;
            }
        }
    }
    
    return ret.length > 0 ? ret : "EMPTY";
}

function solution(code) {
    let mode = 0;
    return [...code].reduce((acc, cur, idx) => {
        if(!mode) {
            if(cur !== '1' && idx % 2 === 0) {
                return acc + cur;
            }
            if(cur === '1') {
                mode = 1;
            }
        } else {
            if(cur !== '1' && idx % 2 !== 0) {
                return acc + cur;
            }
            if(cur === '1') {
                mode = 0;
            }
        }
            
        return acc
    }, "") || "EMPTY";
}
