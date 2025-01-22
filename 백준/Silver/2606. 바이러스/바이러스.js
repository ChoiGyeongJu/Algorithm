const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
  if (lines.length > 1 && lines.length === Number(lines[1]) + 2) {
    rl.close();
  }
});

rl.on("close", () => {
  const n = Number(lines[0]);
  const m = Number(lines[1]);
  const grid = Array.from({ length: n + 1 }, () => []);
  for (let i = 2; i < m + 2; i++) {
    const [x, y] = lines[i].split(" ").map(Number);
    grid[x].push(y);
    grid[y].push(x);
  }

  const visited = new Set();
  function dfs(node) {
    if (!visited.has(node)) {
      visited.add(node);
      for (const next of grid[node]) {
        dfs(next);
      }
    }
  }
  dfs(1);
  console.log([...visited].length - 1);
});
