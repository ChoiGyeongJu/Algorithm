const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

rl.on('line', input => {
  lines.push(input.trim());
  if (lines.length === parseInt(lines[0].split(' ')[0]) + 1) {
    rl.close();
  }
});

rl.on('close', () => {
  let idx = 0;
  const [n, m] = lines[idx++].split(' ').map(Number);
  let grid = [];
  for (let i = 0; i < n; i++) {
    grid.push(lines[idx++].split(''));
  }

  let visited = Array.from({ length: n }, () => Array.from({ length: m }, () => [false, false]));
  visited[0][0][0] = true;
  
  let queue = [];
  let front = 0;  // 큐에서 요소를 꺼낼 인덱스
  queue.push([0, 0, 1, 0]); // x, y, 거리, 벽 부순 횟수

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  let answer = -1;

  while (front < queue.length) {
    const [x, y, dist, cnt] = queue[front++];
    
    if (x === n - 1 && y === m - 1) {
      answer = dist;
      break;
    }

    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + x, ny = dy[i] + y;

      if (0 <= nx && nx < n && 0 <= ny && ny < m) {
        if (!visited[nx][ny][cnt] && grid[nx][ny] === '0') {
          visited[nx][ny][cnt] = true;
          queue.push([nx, ny, dist + 1, cnt]);
        }
        else if (cnt === 0 && !visited[nx][ny][cnt + 1] && grid[nx][ny] === '1') {
          visited[nx][ny][cnt + 1] = true;
          queue.push([nx, ny, dist + 1, cnt + 1]);
        }
      }
    }
  }

  console.log(answer);
});
