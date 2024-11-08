const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

rl.on('line', input => {
  lines.push(input.trim());
  if (lines.length === 2) {
    rl.close();
  }
});

rl.on('close', () => {
  const [n, m] = lines[0].split(' ').map(Number)
  const arr = lines[1].split(' ').map(Number)
  
  // 연속된 수들의 합이 m이 되는 경우의 수
  let answer = 0
  for (let i = 0; i < n; i++) {
    let tmp = 0
    for (let j = i; j < n; j++) {
      tmp += arr[j]
      if (tmp === m) answer += 1
      else if (tmp > m) break
    }
  }

  console.log(answer)
});
