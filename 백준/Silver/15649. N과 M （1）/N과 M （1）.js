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
  const arr = Array.from({ length: n }, (_, i) => i + 1);

  function permutation() {
    let result = [];
    function permute(subArr, x) {
      if (x.length === m) {
        result.push([...x]);
        return;
      }
      for (let i = 0; i < subArr.length; i++) {
        const current = subArr.slice();
        const next = current.splice(i, 1);
        permute(current, x.concat(next));
      }
    }
    permute(arr, []);
    return result;
  }

  const result = permutation();
  for (const p of result) {
    console.log(p.join(" "));
  }
});
