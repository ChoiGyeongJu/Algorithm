const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
  if (lines.length === Number(lines[0].split(" ")[2]) + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const [m, n, k] = lines[0].split(" ").map(Number);
  const grid = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 1)
  );

  for (let i = 1; i <= k; i++) {
    const [x1, y1, x2, y2] = lines[i].split(" ").map(Number);

    for (let j = x1; j < x2; j++) {
      for (let z = y1; z < y2; z++) {
        grid[j][z] = 0;
      }
    }
  }
  // 1 영역의 너비 오름차순 출력
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  function bfs(x, y) {
    const q = [];
    q.push([x, y]);
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
    return q.length;
  }

  const answer = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        grid[i][j] = 0;
        answer.push(bfs(i, j));
      }
    }
  }

  answer.sort((a, b) => a - b);
  console.log(answer.length);
  console.log(answer.join(" "));
});
