const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', input => {
  lines.push(input.trim())

  if (lines.length === parseInt(lines[0].split(' ')[0]) + 1) {
    rl.close()
  }
})

rl.on('close', () => {
  const [N, K] = lines.shift().split(' ').map(Number)
  let arr = []
  for (let i = 0; i < N; i++) {
    arr.push(lines[i].split(' ').map(Number))
  }
  
  let dp = Array.from({length: N + 1}, () => new Array(K + 1).fill(0))
  
  for (let i = 1; i < N + 1; i++) {
    const [W, V] = arr[i - 1]
    for (let j = 1; j < K + 1; j++) {
      if (j - W >= 0) {
        dp[i][j] = Math.max(dp[i - 1][j - W] + V, dp[i - 1][j]) 
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  console.log(dp[N][K])
})