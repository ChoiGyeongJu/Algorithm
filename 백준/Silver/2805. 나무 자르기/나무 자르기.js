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
    const [n, m] = lines.shift().split(' ').map(Number)
    const arr = lines.shift().split(' ').map(Number)
    // m미터 나무를 집에 가져가야함
    let start = 1
    let end = Math.max(...arr)

    let answer = 0
    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        let tmp = 0
        for (const tree of arr) {
            const diff = tree - mid
            if (diff > 0) {
                tmp += diff
            }
        }

        if (tmp < m) {
            end = mid - 1
        } else {
            answer = Math.max(answer, mid)
            start = mid + 1
        }
    }
    console.log(answer)
})
