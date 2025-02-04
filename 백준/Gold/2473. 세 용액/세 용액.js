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
  const arr = lines[1].split(" ").map(Number);
  arr.sort((a, b) => a - b);
  // 3용액의 합이 0에 가깝게

  let answer = [arr[0], arr[1], arr[2]];
  let x = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n - 2; i++) {
    let start = i + 1;
    let end = n - 1;

    while (start < end) {
      const val = arr[start] + arr[end] + arr[i];
      if (Math.abs(val) < x) {
        x = Math.abs(val);
        answer = [arr[i], arr[start], arr[end]];
      }

      if (val > 0) {
        end--;
      } else {
        start++;
      }
    }
  }

  console.log(answer.join(" "));
});
