const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];
rl.on('line', input => {
    lines.push(input.trim());

    if (lines.length === 4) {
        rl.close()
    }
})

rl.on('close', () => {
    const n = parseInt(lines.shift())
    const arr = lines.shift().split(' ').map(Number)
    const m = parseInt(lines.shift())
    const arr2 = lines.shift().split(' ').map(Number)
    arr.sort((a, b) => a - b)

    function binary_search(arr, num) {
        let start = 0
        let end = arr.length

        while (start <= end) {
            const mid = Math.floor((start + end) / 2)

            if (arr[mid] === num) {
                return 1
            }

            if (arr[mid] > num) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
        return 0
    }

    for (const num of arr2) {
        console.log(binary_search(arr, num))
    }
})
