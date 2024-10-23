const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', input => {
  lines.push(input.trim())
  rl.close()
})

rl.on('close', () => {
  const n = parseInt(lines[0])
  const mod = 1000000000

  let dp = Array.from({ length: n + 1 }, () => new Array(10).fill(0))
  for (let i = 1; i < 10; i++) {
    dp[1][i] = 1
  }
  
  for (let i = 2; i < n + 1; i++) {
    for (let j = 0; j < 10; j++) {
      if (j === 0) {
        dp[i][j] = (dp[i - 1][j + 1]) % mod
      } else if (j === 9) {
        dp[i][j] = (dp[i - 1][j - 1]) % mod
      } else {
        dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % mod
      }
    }
  }

  let answer = 0
  for (let i = 0; i < 10; i++) {
    answer = (answer + dp[n][i]) % mod
  }
  console.log(answer)
})