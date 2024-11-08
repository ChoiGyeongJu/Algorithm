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
  const [n, k] = lines[0].split(' ').map(Number)
  const arr = lines[1].split(' ').map(Number)
  // arr에서 연속된 k개의 숫자의 합이 가장 큰 값 출력

  const prefix = [0]
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + arr[i]
  }


  let answer = Number.MIN_SAFE_INTEGER
  for (let i = k; i <= n; i++) {
    answer = Math.max(answer, prefix[i] - prefix[i - k])
  }
  console.log(answer)
});
