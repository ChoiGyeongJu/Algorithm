const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', input => {
  lines.push(input.trim())

  if (lines.length === 2) {
    rl.close()
  }
})

rl.on('close', () => {
  const n = parseInt(lines[0])
  let dp = lines[1].split(' ').map(Number)

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + dp[i], dp[i])
  }
  
  console.log(Math.max(...dp))
})
