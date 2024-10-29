const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];
rl.on('line', input => {
    lines.push(input.trim());

    if (lines.length === parseInt(lines[0].split(' ')[1]) + 2) {
        rl.close()
    }
})

rl.on('close', () => {
    const [n, m] = lines.shift().split(' ').map(Number)
    const numList = lines.shift().split(' ').map(Number)
    let dp = new Array(n + 1).fill(0)

    for (let i = 1; i < n + 1; i++) {
        dp[i] = dp[i - 1] + numList[i - 1]
    } 

    for (let i = 0; i < m; i++) {
        const [start, end] = lines[i].split(' ').map(Number)
        console.log(dp[end] - dp[start - 1])
    }
})
