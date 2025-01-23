const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
  if (lines.length === Number(lines[0].split(" ")[1]) + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const [n, m] = lines[0].split(" ").map(Number);
  const grid = Array.from({ length: n + 1 }, () => []);
  for (let i = 1; i < m + 1; i++) {
    const [x, y] = lines[i].split(" ").map(Number);
    grid[x].push(y);
    grid[y].push(x);
  }

  const visited = new Set();
  function bfs(node) {
    const q = [node];
    visited.add(node);

    while (q.length) {
      const node = q.shift();
      for (const next of grid[node]) {
        if (!visited.has(next)) {
          visited.add(next);
          q.push(next);
        }
      }
    }
  }

  let answer = 0;
  for (let i = 1; i < n + 1; i++) {
    if (!visited.has(i)) {
      bfs(i);
      answer++;
    }
  }
  console.log(answer);
});
