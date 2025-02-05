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
  const [n, h] = lines[0].split(" ").map(Number);

  const arr = lines.slice(1).map(Number);

  const top = Array(h + 1).fill(0);
  const bottom = Array(h + 1).fill(0);

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      bottom[arr[i]]++;
    } else {
      top[h - arr[i] + 1]++;
    }
  }

  for (let i = h - 1; i >= 1; i--) {
    bottom[i] += bottom[i + 1];
  }
  for (let i = 2; i <= h; i++) {
    top[i] += top[i - 1];
  }

  const total = Array(h + 1).fill(0);
  for (let i = 1; i < h + 1; i++) {
    total[i] = bottom[i] + top[i];
  }

  total[0] = Infinity;
  const map = new Map();
  for (let i = 1; i < h + 1; i++) {
    map.set(total[i], (map.get(total[i]) || 0) + 1);
  }

  const min_val = Math.min(...total);
  console.log(min_val, map.get(min_val));
});
