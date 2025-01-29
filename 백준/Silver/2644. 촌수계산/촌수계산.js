const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
  if (lines.length > 3 && lines.length === Number(lines[2]) + 3) {
    rl.close();
  }
});

rl.on("close", () => {
  const n = Number(lines[0]);
  const [start, end] = lines[1].split(" ").map(Number);

  const m = Number(lines[2]);
  const grid = Array.from({ length: n + 1 }, () => []);

  for (let i = 0; i < m; i++) {
    const [x, y] = lines[i + 3].split(" ").map(Number);
    grid[x].push(y);
    grid[y].push(x);
  }

  const visited = new Set();
  let answer = 0;

  function dfs(node, cnt) {
    visited.add(node);
    cnt += 1;

    if (node === end) {
      answer = cnt;
      return;
    }

    for (const next of grid[node]) {
      if (!visited.has(next)) {
        dfs(next, cnt);
      }
    }
  }

  dfs(start, 0);
  console.log(answer - 1);
});
