const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
  if (lines.length === Number(lines[0])) {
    rl.close();
  }
});

rl.on("close", () => {
  const n = Number(lines[0]);
  const grid = Array.from({ length: n + 1 }, () => []);
  for (let i = 1; i < n; i++) {
    const [x, y] = lines[i].split(" ").map(Number);
    grid[x].push(y);
    grid[y].push(x);
  }

  // 1에서 내려가는 dfs
  const visited = Array(n + 1).fill(0);
  function dfs(node) {
    for (const next of grid[node]) {
      if (visited[next] === 0) {
        visited[next] = node;
        dfs(next);
      }
    }
  }
  visited[1] = 1;
  dfs(1);
  console.log(visited.slice(2).join("\n"));
});
