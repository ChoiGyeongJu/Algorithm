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
  let n = parseInt(lines[0])
  let h = lines.slice(1)
  let H = []
  for (let i = 0; i < n; i++) {
    H.push(h[i].split(' ').map(Number))
  }

  for (let i = 1; i < n; i++) {
    H[i][0] += Math.min(H[i - 1][1], H[i - 1][2])
    H[i][1] += Math.min(H[i - 1][0], H[i - 1][2])
    H[i][2] += Math.min(H[i - 1][0], H[i - 1][1])
  }
  
  console.log(Math.min(...H[n - 1]))
})