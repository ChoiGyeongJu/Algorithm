const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', input => {
  lines.push(input.trim())

  if (lines.length === lines[0].split(' ').map(Number)[1] + 1) {
    rl.close()
  }
})

rl.on('close', () => {
  const [N, M, V] = lines.shift().split(' ').map(Number)
  let graph = Array.from({length: N + 1}, () => [])
  for (let i = 0; i < M; i++) {
    let [start, end] = lines.shift().split(' ').map(Number)
    graph[start].push(end)
    graph[end].push(start)
  }
  for (let i = 1; i < N + 1; i++) {
    graph[i].sort((a, b) => a - b)
  }

  // dfs 결과 출력
  function dfs(node, visited) {
    if (!visited.has(node)) {
      visited.add(node)
      for (let next of graph[node]) {
        dfs(next, visited)
      }
    }
  }
  let visited_dfs = new Set()
  dfs(V, visited_dfs)
  console.log([...visited_dfs].join(' '))

  // bfs 결과 출력
  let queue = []
  let visited = new Set()
  queue.push(V)
  visited.add(V)
  while (queue.length > 0) {
    let node = queue.shift()
    for (let next of graph[node]) {
      if (!visited.has(next)) {
        queue.push(next)
        visited.add(next)
      }
    }
  }
  console.log([...visited].join(' ')) 
})