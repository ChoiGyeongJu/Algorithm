const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;

rl.on("line", (input) => {
  n = parseInt(input)
  
  rl.close()
});

// output
rl.on("close", () => {
  let dp = new Array(1001).fill(0)
  dp[1] = 1
  dp[2] = 2
  dp[3] = 3

  for (let i = 4; i < 1001; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007
  }
  console.log(dp[n])
});