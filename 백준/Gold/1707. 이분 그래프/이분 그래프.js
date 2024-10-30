const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = []

rl.on("line", (input) => {
    lines.push(input.trim())
});

rl.on("close", () => {
    const k = parseInt(lines.shift())
    let idx = 0
    for (let t = 0; t < k; t++) {
        const [V, E] = lines[idx++].split(' ').map(Number)
        let graph = Array.from({ length: V + 1 }, () => Array())
        for (let i = 0; i < E; i++) {
            const [x, y] = lines[idx++].split(' ').map(Number)
            graph[x].push(y)
            graph[y].push(x)
        }
        
        let visited = new Array(V + 1).fill(0)
        function solution() {
            for (let i = 1; i < V + 1; i++) {
                if (visited[i] === 0) {
                    visited[i] = 1
                    let queue = [i]
                    while (queue.length > 0) {
                        const node = queue.shift()
                        for (const next of graph[node]) {
                            if (visited[next] === 0) {
                                visited[next] = -1 * visited[node]
                                queue.push(next)
                            } else if (visited[next] === visited[node]) {
                                return false
                            }
                        }
                    }
                }
            }
            return true
        }
        if (solution()) console.log('YES')
        else console.log('NO')
    }
});