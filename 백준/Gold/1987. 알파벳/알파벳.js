const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = []

rl.on("line", (input) => {
    lines.push(input.trim())

    if (lines.length === parseInt(lines[0].split(' ')[0]) + 1) {
        rl.close()
    }
});

rl.on("close", () => {
    let idx = 0
    const [R, C] = lines[idx++].split(' ').map(Number)
    let grid = []
    for (let i = 0; i < R; i++) {
        grid.push(lines[idx++].split(''))
    }
    
    const dx = [0, 0, 1, -1]
    const dy = [1, -1, 0, 0]

    let visited = new Set()
    visited.add(grid[0][0])
    let answer = 0

    function dfs(x, y, cnt) {
        answer = Math.max(answer, cnt)

        for (let i = 0; i < 4; i++) {
            const nx = dx[i] + x
            const ny = dy[i] + y

            if (0 <= nx && nx < R && 0 <= ny && ny < C && !visited.has(grid[nx][ny])) {
                visited.add(grid[nx][ny])
                dfs(nx, ny, cnt + 1)
                visited.delete(grid[nx][ny])
            }
        }
    }
    dfs(0, 0, 1)
    console.log(answer)
});