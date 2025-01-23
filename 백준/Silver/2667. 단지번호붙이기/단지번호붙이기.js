const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
  if (lines.length === Number(lines[0]) + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const n = Number(lines[0]);
  const grid = [];
  for (let i = 1; i < n + 1; i++) {
    grid.push(lines[i].split("").map(Number));
  }

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  function bfs(x, y) {
    const q = [];
    q.push([x, y]);
    grid[x][y] = 0;
    let cnt = 1;

    while (q.length) {
      const [x, y] = q.shift();
      for (let i = 0; i < 4; i++) {
        const nx = dx[i] + x,
          ny = dy[i] + y;
        if (0 <= nx && nx < n && 0 <= ny && ny < n) {
          if (grid[nx][ny] === 1) {
            grid[nx][ny] = 0;
            cnt++;
            q.push([nx, ny]);
          }
        }
      }
    }
    return cnt;
  }

  const answer = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        answer.push(bfs(i, j));
      }
    }
  }

  answer.sort((a, b) => a - b);
  console.log(answer.length);
  console.log(answer.join("\n"));
});
