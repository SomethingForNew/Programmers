process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const d = data.split(" ");
    const n = d[0];
    const m = d[1];
    const stars = "*".repeat(n);
    
    for(let i = 0; i < m; i++){
        console.log(stars);
    }
});