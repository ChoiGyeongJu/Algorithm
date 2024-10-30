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
    let weak = Array.from({ length: n }, () => Array(n).fill(0))
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 'B') {
                weak[i][j] = 'B'
            } else {
                weak[i][j] = 'R'
            }
        }
    }

    const dx = [0, 0, 1, -1]
    const dy = [1, -1, 0, 0]
    function bfs(x, y, isWeak) {
        let queue = [[x, y]]
        const current = isWeak ? weak[x][y] : grid[x][y]
        if (isWeak) {
            weak[x][y] = 0
        } else {
            grid[x][y] = 0
        }

        while (queue.length > 0) {
            const [x, y] = queue.shift()
            for (let i = 0; i < 4; i++) {
                const nx = dx[i] + x
                const ny = dy[i] + y

                if (0 <= nx && nx < n && 0 <= ny && ny < n) {
                    if (isWeak) {
                        if (weak[nx][ny] === current) {
                            queue.push([nx, ny])
                            weak[nx][ny] = 0
                        }
                    } else {
                        if (grid[nx][ny] === current) {
                            queue.push([nx, ny])
                            grid[nx][ny] = 0
                        }
                    }
                }
            }
        }
    }

    let a = 0
    let b = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] !== 0) {
                bfs(i, j, false)
                a += 1
            }
            if (weak[i][j] !== 0) {
                bfs(i, j, true)
                b += 1
            }
        }
    }
    console.log(a, b)
});