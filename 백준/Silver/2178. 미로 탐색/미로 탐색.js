const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
  if (lines.length === Number(lines[0].split(" ")[0]) + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const [n, m] = lines[0].split(" ").map(Number);
  const grid = [];
  for (let i = 1; i < n + 1; i++) {
    grid.push(lines[i].split("").map(Number));
  }

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const q = [];
  const visited = new Set();

  q.push([0, 0, 1]);
  visited.add(`0,0`);
  while (q.length) {
    const [x, y, cnt] = q.shift();
    if (x === n - 1 && y === m - 1) {
      console.log(cnt);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + x,
        ny = dy[i] + y;
      if (0 <= nx && nx < n && 0 <= ny && ny < m) {
        const pos = `${nx},${ny}`;
        if (!visited.has(pos) && grid[nx][ny] === 1) {
          visited.add(pos);
          q.push([nx, ny, cnt + 1]);
        }
      }
    }
  }
});
