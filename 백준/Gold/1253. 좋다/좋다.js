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

  let cnt = 0;
  for (let i = 0; i < n; i++) {
    let start = i === 0 ? 1 : 0;
    let end = i === n - 1 ? n - 2 : n - 1;

    while (start < end) {
      const sum = arr[start] + arr[end];
      if (sum === arr[i]) {
        cnt++;
        break;
      }

      if (sum > arr[i]) {
        if (end - 1 === i) end -= 2;
        else end--;
      } else {
        if (start + 1 === i) start += 2;
        else start++;
      }
    }
  }

  console.log(cnt);
});
