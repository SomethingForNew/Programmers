const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const strArr = [...str];
    let answer = strArr.map(a => {
        if(a.charCodeAt() >= 97) {
            return a.toUpperCase();
        }
        return a.toLowerCase();
    })
    console.log(answer.join(''));
});