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
  function bfs(x, y, visited) {
    // 1년 뒤로 grid 변경
    const q = [[x, y]];
    let head = 0;

    const tmp = [];

    while (q.length > head) {
      const [x, y] = q[head++];
      let cnt = 0;
      for (let i = 0; i < 4; i++) {
        const nx = dx[i] + x,
          ny = dy[i] + y;
        if (0 <= nx && nx < n && 0 <= ny && ny < m) {
          if (grid[nx][ny] === 0) cnt++;
          else if (!visited.has(`${nx},${ny}`)) {
            visited.add(`${nx},${ny}`);
            q.push([nx, ny]);
          }
        }
      }
      tmp.push([x, y, cnt]);
    }
    for (const [x, y, cnt] of tmp) {
      grid[x][y] = Math.max(0, grid[x][y] - cnt);
    }
  }

  let answer = 0;
  while (true) {
    let cnt = 0;
    const visited = new Set();
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] !== 0 && !visited.has(`${i},${j}`)) {
          cnt++;
          visited.add(`${i},${j}`);
          bfs(i, j, visited);
        }
      }
    }
    if (cnt > 1) {
      console.log(answer);
      break;
    } else if (cnt === 0) {
      console.log(0);
      break;
    }
    answer++;
  }
});
