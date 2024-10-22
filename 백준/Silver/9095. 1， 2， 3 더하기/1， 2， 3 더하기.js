const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(parseInt(input))

  if (lines.length === lines[0] + 1) {
    rl.close()
  }
});

// output
rl.on("close", () => {
  const T = lines[0]

  let dp = new Array(11).fill(0)
  dp[1] = 1
  dp[2] = 2
  dp[3] = 4
  for (let i = 4; i < 11; i++) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1]
  }
  
  for (let i = 0; i < T; i++) {
    console.log(dp[lines[i + 1]])
  }
});




