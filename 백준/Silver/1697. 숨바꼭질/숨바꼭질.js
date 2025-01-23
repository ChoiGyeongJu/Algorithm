const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (input) => {
  lines.push(input.trim());
  if (lines.length === 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const [n, k] = lines[0].split(" ").map(Number);

  // 1초후 -1, +1, *2 위치로 이동. n -> k 최단 시간
  function bfs() {
    let q = [[n, 0]];
    let head = 0;
    const visited = new Set();
    visited.add(n);

    while (q.length > head) {
      const [pos, t] = q[head++];
      if (pos === k) return t;
      for (const next of [pos + 1, pos - 1, pos * 2]) {
        if (next < 0 || next > 100000 || visited.has(next)) continue;
        visited.add(next);
        q.push([next, t + 1]);
      }
    }
  }
  console.log(bfs());
});
