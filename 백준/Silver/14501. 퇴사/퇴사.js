const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', input => {
  lines.push(input.trim())

  if (lines.length === parseInt(lines[0]) + 1) {
    rl.close()
  }
})

rl.on('close', () => {
  const n = parseInt(lines.shift())
  let arr = []
  for (let i = 0; i < lines.length; i++) {
    arr.push(lines[i].split(' ').map(Number))
  }
  
  let dp = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    let [day, pay] = arr[i]
    for (let j = i + day; j < n + 1; j++) {
      if (dp[j] < dp[i] + pay) {
        dp[j] = dp[i] + pay
      }
    }
  }
  console.log(Math.max(...dp))
})