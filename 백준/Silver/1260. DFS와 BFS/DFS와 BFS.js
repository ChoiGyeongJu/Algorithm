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
  const [n, m, v] = lines[0].split(" ").map(Number);
  const grid = Array.from({ length: n + 1 }, () => []);

  for (let i = 0; i < m; i++) {
    const [x, y] = lines[i + 1].split(" ").map(Number);
    grid[x].push(y);
    grid[y].push(x);
  }

  for (let i = 0; i < n + 1; i++) {
    grid[i].sort((a, b) => a - b);
  }

  let visited = new Set([v]);
  function dfs(v) {
    for (const x of grid[v]) {
      if (!visited.has(x)) {
        visited.add(x);
        dfs(x);
      }
    }
  }
  dfs(v);
  console.log([...visited].join(" "));

  visited = new Set([v]);
  function bfs() {
    const q = [];
    q.push(v);

    while (q.length) {
      const x = q.shift();

      for (const next of grid[x]) {
        if (!visited.has(next)) {
          visited.add(next);
          q.push(next);
        }
      }
    }
  }
  bfs();
  console.log([...visited].join(" "));
});
