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
  const normal = lines.slice(1).map((v) => v.split(""));
  const copy = JSON.parse(JSON.stringify(normal));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (copy[i][j] === "R") copy[i][j] = "G";
    }
  }

  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];

  function bfs(grid, x, y, color) {
    const q = [];
    q.push([x, y]);
    grid[x][y] = "X";
    let head = 0;
    while (q.length > head) {
      const [x, y] = q[head++];

      for (let i = 0; i < 4; i++) {
        const nx = dx[i] + x,
          ny = dy[i] + y;
        if (0 <= nx && nx < n && 0 <= ny && ny < n) {
          if (grid[nx][ny] === color) {
            grid[nx][ny] = "X";
            q.push([nx, ny]);
          }
        }
      }
    }
  }

  let a = 0,
    b = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (normal[i][j] === "R") {
        a++;
        bfs(normal, i, j, "R");
      } else if (normal[i][j] === "G") {
        a++;
        bfs(normal, i, j, "G");
      } else if (normal[i][j] === "B") {
        a++;
        bfs(normal, i, j, "B");
      }

      if (copy[i][j] === "G") {
        b++;
        bfs(copy, i, j, "G");
      } else if (copy[i][j] === "B") {
        b++;
        bfs(copy, i, j, "B");
      }
    }
  }
  console.log(a, b);
});
