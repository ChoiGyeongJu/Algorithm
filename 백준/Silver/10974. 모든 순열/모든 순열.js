const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = []

rl.on("line", (input) => {
    lines.push(input.trim())
    
    if (lines.length === 1) {
        rl.close()
    }
});

rl.on("close", () => {
    const n = parseInt(lines.shift())
    let arr = Array.from({length: n}, (_, i) => i + 1)

    function permutations(arr) {
        let result = []
        function permute(subArr, m = []) {
            if (subArr.length === 0) {
                result.push([...m])
                return
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
    
    for (const perm of permutations(arr)) {
        console.log(perm.join(' '))
    }
});