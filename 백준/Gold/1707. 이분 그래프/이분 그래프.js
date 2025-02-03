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
  let idx = 0;
  const K = Number(lines[idx++]);

  for (let i = 0; i < K; i++) {
    const [V, E] = lines[idx++].split(" ").map(Number);
    const grid = Array.from({ length: V + 1 }, () => []);

    for (let j = 0; j < E; j++) {
      const [u, v] = lines[idx++].split(" ").map(Number);
      grid[u].push(v);
      grid[v].push(u);
    }

    const colors = new Array(V + 1).fill(0);
    function dfs(node) {
      colors[node] = 1;
      const stack = [];
      stack.push(node);

      while (stack.length) {
        const x = stack.pop();
        for (const next of grid[x]) {
          if (colors[next] === 0) {
            colors[next] = -colors[x];
            stack.push(next);
          } else if (colors[next] === colors[x]) {
            return false;
          }
        }
      }
      return true;
    }

    let flag = true;
    for (let k = 1; k <= V; k++) {
      if (colors[k] === 0) {
        if (!dfs(k)) {
          flag = false;
          break;
        }
      }
    }
    console.log(flag ? "YES" : "NO");
  }
});
