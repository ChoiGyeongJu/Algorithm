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
  const [n, m] = lines[0].split(" ").map(Number);
  const grid = lines.slice(1).map((v) => v.split(" ").map(Number));

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  function bfs(a, b) {
    grid[a][b] = 0;
    const q = [[a, b]];
    let head = 0;

    while (q.length > head) {
      const [x, y] = q[head++];
      for (let i = 0; i < 4; i++) {
        const nx = dx[i] + x,
          ny = dy[i] + y;
        if (0 <= nx && nx < n && 0 <= ny && ny < m) {
          if (grid[nx][ny] === 1) {
            grid[nx][ny] = 0;
            q.push([nx, ny]);
          }
        }
      }
    }
    return head;
  }

  const answer = [0];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        answer.push(bfs(i, j));
      }
    }
  }
  console.log(answer.length - 1);
  console.log(Math.max(...answer));
});
