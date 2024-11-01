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
    function bin(v) {
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

    let memo = []
    for (const num of arr) {
        if (result.length === 0) {
            result.push(num)
            memo.push([num, 0])
            continue
        }

        let l = result.length
        if (result[l - 1] < num) {
            result.push(num)
            memo.push([num, l])
        } else {
            result[bin(num)] = num
            memo.push([num, bin(num)])
        }
    }
    
    let answer = []
    let l = result.length
    while (memo.length > 0) {
        const [val, idx] = memo.pop()

        if (idx === l - 1) {
            answer.push(val)
            l -= 1
        }
    }

    console.log(answer.length)
    console.log(answer.reverse().join(' '))
});