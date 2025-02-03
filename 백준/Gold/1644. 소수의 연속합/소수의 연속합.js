const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
});

rl.on("close", () => {
  const n = Number(lines[0]);
  // n을 연속된 소수의 합으로 나타낼 수 있는 경우의 수

  function getPrime() {
    const v = Array(n + 1).fill(true);
    v[0] = v[1] = false;

    for (let i = 2; i * i <= n; i++) {
      if (v[i]) {
        for (let j = i * i; j <= n; j += i) {
          v[j] = false;
        }
      }
    }
    return v
      .map((x, i) => {
        if (!!x) return i;
      })
      .filter((y) => !!y);
  }

  const primeNumber = getPrime();
  const l = primeNumber.length;
  let answer = 0,
    start = 0,
    end = 0,
    sum = 0;

  while (end < l) {
    sum += primeNumber[end];

    while (sum > n) {
      sum -= primeNumber[start];
      start++;
    }
    if (sum === n) {
      answer++;
    }
    end++;
  }
  console.log(answer);
});
