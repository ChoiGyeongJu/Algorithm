const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

rl.on('line', input => {
  lines.push(input.trim());
  if (lines.length === parseInt(lines[0].split(' ')[0]) + 1) {
    rl.close();
  }
});

rl.on('close', () => {
  let idx = 0
  const [n, m] = lines[idx++].split(' ').map(Number)
  let grid = []
  for (let i = 0; i < n; i++) {
    grid.push(lines[idx++].split(' ').map(Number))
  }
  
  let dp = Array.from({ length: n }, () => new Array(m).fill(-1))  

  const inRange = (x, y) => 0 <= x && x < n && 0 <= y && y < m

  const dx = [0, 0, 1, -1]
  const dy = [1, -1, 0, 0]

  let answer = 0
  function dfs(x, y) {
    if (x === n - 1 && y === m - 1) {
      return 1
    }    

    if (dp[x][y] !== -1) return dp[x][y]

    dp[x][y] = 0

    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + x, ny = dy[i] + y
      if (inRange(nx, ny) && grid[nx][ny] < grid[x][y]) {
        dp[x][y] += dfs(nx, ny)
      }
    }

    return dp[x][y]
  }

  dfs(0, 0)
  console.log(dp[0][0])
});
