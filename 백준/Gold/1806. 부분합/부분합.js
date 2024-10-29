const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];
rl.on('line', input => {
    lines.push(input.trim());

    if (lines.length === 2) {
        rl.close()
    }
})

rl.on('close', () => {
    const [n, s] = lines.shift().split(' ').map(Number)
    const numList = lines[0].split(' ').map(Number)
    
    if (numList.reduce((acc, cur) => acc + cur, 0) < s) {
        console.log(0)
        return
    }

    let answer = n
    for (let i = 0; i < n; i++) {
        let tmp = 0
        let idx = i
    
        while (tmp < s && idx < n) {
            tmp += numList[idx]
            idx += 1
        }
        if (tmp >= s) {
            answer = Math.min(answer, idx - i)
        }
    }
    console.log(answer)
})
