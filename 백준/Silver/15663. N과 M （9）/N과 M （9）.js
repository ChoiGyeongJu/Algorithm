const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

rl.on('line', input => {
  lines.push(input.trim());
  if (lines.length === 2) {
    rl.close();
  }
});

rl.on('close', () => {
  const [n, k] = lines[0].split(' ').map(Number)
  const arr = lines[1].split(' ').map(Number)
  arr.sort((a, b) => a - b)

  // 길이가 m인것 출력
  function permutations(arr, k) {
    let result = new Set()
    function permute(subArr, m) {
      if (m.length === k) {
        const s = m.join(' ')
        if (!result.has(s)) result.add(s)
      } else {
        for (let i = 0; i < subArr.length; i++) {
          const current = [...subArr]
          const next = current.splice(i, 1)
          permute(current, m.concat(next))
        }
      }
    }
    permute(arr, [])
    return result
  }
  const answer = permutations(arr, k)
  for (const a of [...answer]) {
    console.log(a)
  }
});
