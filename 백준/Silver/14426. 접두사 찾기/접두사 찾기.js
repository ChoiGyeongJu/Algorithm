const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = []

rl.on("line", (input) => {
    lines.push(input.trim())
    const [n, m] = lines[0].split(' ').map(Number)
    
    if (lines.length === n + m + 1) {
        rl.close()
    }
});

rl.on("close", () => {
    let idx = 0
    const [n, m] = lines[idx++].split(' ').map(Number)
    const S = []
    const words = []
    for (let i = 0; i < n; i++) {
        S.push(lines[idx++])
    }
    for (let i = 0; i < m; i++) {
        words.push(lines[idx++])
    }

    S.sort()
    function bin(dict, target) {
        let start = 0, end = dict.length - 1
        while (start <= end) {
            const mid = Math.floor((start + end) / 2)
            if (dict[mid].startsWith(target)) return true
            if (dict[mid] < target) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
        return false
    }
    let answer = 0
    for (const word of words) {
        if (bin(S, word)) answer += 1
    }
    console.log(answer)
});