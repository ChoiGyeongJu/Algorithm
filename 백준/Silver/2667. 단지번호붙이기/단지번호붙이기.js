const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = []

rl.on("line", (input) => {
    lines.push(input.trim())
    
    if (lines.length === parseInt(lines[0]) + 1) {
        rl.close()
    }
});

rl.on("close", () => {
    const n = parseInt(lines.shift())
    let grid = []
    for (let i = 0; i < n; i++) {
        grid.push(lines[i].split(''))
    }

    const dx = [0, 0, 1, -1]
    const dy = [1, -1, 0, 0]
    function bfs(x, y) {
        let queue = [[x, y]]
        grid[x][y] = 0
        let cnt = 1

        while (queue.length > 0) {
            const [x, y]= queue.shift()
            for (let i = 0; i < 4; i++) {
                const nx = dx[i] + x
                const ny = dy[i] + y

                if (0 <= nx && nx < n && 0 <= ny && ny < n) {
                    if (grid[nx][ny] === '1') {
                        cnt += 1
                        queue.push([nx, ny])
                        grid[nx][ny] = 0
                    }
                }
            }
        }
        return cnt
    }
    let answer = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                answer.push(bfs(i, j))
            }
        }
    }
    answer.sort((a, b) => a - b)
    console.log(answer.length)
    for (const a of answer) {
        console.log(a)
    }
});