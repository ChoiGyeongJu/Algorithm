const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = []

rl.on("line", (input) => {
    lines.push(input.trim())
    
    if (lines.length === 2) {
        rl.close()
    }
});

rl.on("close", () => {
    const [n, m] = lines.shift().split(' ').map(Number)
    const arr = lines[0].split(' ').map(Number)

    let answer = 0
    function dfs(start, value) {
        if (start === n) return

        if (arr[start] + value === m) answer += 1
        else if (arr[start] + value < m) {
            dfs(start + 1, arr[start] + value)
        } else {
            return
        }
    }

    for (let i = 0; i < n; i++) {
        dfs(i, 0)
    }
    console.log(answer)
});