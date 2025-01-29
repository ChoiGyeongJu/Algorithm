const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
  if (lines.length === 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const maxSize = 100001;
  const [n, k] = lines[0].split(" ").map(Number);
  const visited = Array.from({ length: maxSize }, () => -1);
  visited[n] = 0;

  const q = [n];
  while (q.length) {
    const pos = q.shift();
    if (pos === k) {
      console.log(visited[k]);
      return;
    }

    for (const next of [pos * 2, pos - 1, pos + 1]) {
      if (0 <= next && next < maxSize) {
        if (visited[next] === -1) {
          if (next === pos * 2) {
            visited[next] = visited[pos];
            q.unshift(next);
          } else {
            visited[next] = visited[pos] + 1;
            q.push(next);
          }
        }
      }
    }
  }
});
