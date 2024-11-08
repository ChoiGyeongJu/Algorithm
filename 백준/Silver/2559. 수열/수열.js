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

  let tmp = 0
  for (let i = 0; i < k; i++) {
    tmp += arr[i]
  }
  let answer = tmp
  let front = 0
  let rear = k - 1
  while (rear < n) {
    tmp -= arr[front++]
    tmp += arr[++rear]

    if (tmp > answer) answer = tmp
  }
  console.log(answer)
});
