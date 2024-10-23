const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', input => {
  lines.push(input)

  if (lines.length === 2) {
    rl.close()
  }
})

rl.on('close', () => {
  const n = parseInt(lines[0])
  let arr = lines[1].split(' ').map(Number)
  let dp = new Array(n).fill(1)

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
  }

  console.log(Math.max(...dp))
})