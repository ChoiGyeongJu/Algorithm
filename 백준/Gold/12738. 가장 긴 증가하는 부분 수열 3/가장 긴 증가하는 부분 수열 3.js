const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = []

rl.on("line", (input) => {
    lines.push(input.trim())
    
    if (lines.length === 2) {
        rl.close()
    }
});

rl.on("close", () => {
    const n = parseInt(lines.shift())
    const arr = lines[0].split(' ').map(Number)

    let result = []
    for (const num of arr) {
        if (result.length === 0) {
            result.push(num)
            continue
        }
        if (result[result.length - 1] < num) {
            result.push(num)
        } else {
            result[bin_search(num)] = num
        }
    }

    function bin_search(v) {
        let start = 0, end = result.length
        while (start <= end) {
            let mid = Math.floor((start + end) / 2)
            
            if (result[mid] < v) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
        return start
    }

    console.log(result.length)
});