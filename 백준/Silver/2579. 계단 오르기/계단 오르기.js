const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(parseInt(input))

  if (lines.length > lines[0]) {
    rl.close()
  }
});

// output
rl.on("close", () => {
  let n = lines[0]
  let arr = lines.slice(1)

  if (n === 1) {
    console.log(arr[0])
    return
  }

  let dp = new Array(n).fill(0)
  dp[0] = arr[0]
  dp[1] = arr[0] + arr[1]
  
  if (n > 2) {
    dp[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2])
  }

  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 3] + arr[i - 1] + arr[i])
  }
  console.log(dp[n - 1])
});
