const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = []

rl.on("line", (input) => {
    lines.push(input.trim())
    
    if (lines.length === parseInt(lines[0].split(' ')[1]) + 1) {
        rl.close()
    }
});

rl.on("close", () => {
    const [n, m, r] = lines.shift().split(' ').map(Number)
    let graph = Array.from({ length: n + 1 }, () => Array())
    for (let i = 0; i < m; i++) {
        const [x, y] = lines[i].split(' ').map(Number)
        graph[x].push(y)
        graph[y].push(x)
    }
    graph.forEach(v => v.sort((a, b) => b - a))
    
    let visited = new Array(n + 1).fill(0)
    visited[r] = 1
    let index = 1
    function dfs(x) {
        for (const next of graph[x]) {
            if (visited[next] === 0) {
                index += 1
                visited[next] = index 
                dfs(next, index)
            }
        }
    }
    dfs(r, index)
    for (let i = 1; i < n + 1; i++) {
        console.log(visited[i])
    }
});