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
  let dp = new Array(1001).fill(0)
  dp[1] = 1
  dp[2] = 3

  for (let i = 3; i < 1001; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007
  }
  console.log(dp[n])
})
