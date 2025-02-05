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
  const n = Number(lines[0]);

  const a = [],
    b = [],
    c = [],
    d = [];

  for (let i = 0; i < n; i++) {
    const [q, w, e, r] = lines[i + 1].split(" ").map(Number);
    a.push(q);
    b.push(w);
    c.push(e);
    d.push(r);
  }

  const ab = new Map();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const sum = a[i] + b[j];
      ab.set(sum, (ab.get(sum) || 0) + 1);
    }
  }

  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const target = -(c[i] + d[j]);
      if (ab.has(target)) {
        answer += ab.get(target);
      }
    }
  }
  console.log(answer);
});
