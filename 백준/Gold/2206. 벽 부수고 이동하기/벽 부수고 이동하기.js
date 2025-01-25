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
  const grid = lines.splice(1).map((v) => v.split("").map(Number));

  // 1은 벽, 한개까지 부술 수 있음, 최단거리 출력
  function bfs() {
    let head = 0;
    const q = [];
    q.push([0, 0, 1, 0]);

    const visited = Array.from({ length: n }, () =>
      Array.from({ length: m }, () => [false, false])
    );
    visited[0][0][0] = true;

    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];

    while (q.length > head) {
      const [x, y, dist, cnt] = q[head++];
      if (x === n - 1 && y === m - 1) {
        return dist;
      }
      for (let i = 0; i < 4; i++) {
        const nx = dx[i] + x;
        const ny = dy[i] + y;
        if (0 <= nx && nx < n && 0 <= ny && ny < m) {
          if (grid[nx][ny] === 0 && !visited[nx][ny][cnt]) {
            visited[nx][ny][cnt] = true;
            q.push([nx, ny, dist + 1, cnt]);
          } else if (
            grid[nx][ny] === 1 &&
            cnt === 0 &&
            !visited[nx][ny][cnt + 1]
          ) {
            visited[nx][ny][cnt + 1] = true;
            q.push([nx, ny, dist + 1, cnt + 1]);
          }
        }
      }
    }
    return -1;
  }

  console.log(bfs());
});
