const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', input => {
  lines.push(input)
  if (lines.length === 1) {
    rl.close()
  }
})

rl.on('close', () => {
  const n = parseInt(lines[0])
  let dp = new Array(n + 1).fill(0)
  dp[1] = 1

  for (let i = 2; i < n + 1; i++) {
    dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2])
  }
  console.log(dp[n].toString())
})
