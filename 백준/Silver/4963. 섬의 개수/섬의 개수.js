const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
  if (input === "0 0") {
    rl.close();
  }
});

rl.on("close", () => {
  const dx = [0, 0, -1, 1, 1, 1, -1, -1];
  const dy = [1, -1, 0, 0, 1, -1, -1, 1];

  function bfs(grid, x, y) {
    const q = [];
    q.push([x, y]);
    let head = 0;

    while (q.length > head) {
      const [x, y] = q[head++];
      for (let i = 0; i < 8; i++) {
        const nx = dx[i] + x;
        const ny = dy[i] + y;
        if (0 <= nx && nx < grid.length && 0 <= ny && ny < grid[0].length) {
          if (grid[nx][ny] === 1) {
            grid[nx][ny] = 0;
            q.push([nx, ny]);
          }
        }
      }
    }
  }

  let idx = 0;
  while (true) {
    const [w, h] = lines[idx++].split(" ").map(Number);
    if (w === 0 && h === 0) break;
    const grid = [];
    for (let i = idx; i < idx + h; i++) {
      grid.push(lines[i].split(" ").map(Number));
    }
    idx += h;

    let answer = 0;
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        if (grid[i][j] === 1) {
          bfs(grid, i, j);
          answer++;
        }
      }
    }
    console.log(answer);
  }
});
