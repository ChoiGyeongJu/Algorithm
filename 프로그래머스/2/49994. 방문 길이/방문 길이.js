function solution(dirs) {
    function getNextPosition(command, x, y) {
        if (command === 'U') return [x + 1, y]
        if (command === 'D') return [x - 1, y]
        if (command === 'L') return [x, y - 1]
        if (command === 'R') return [x, y + 1]
    }

    let set = new Set()
    let x = 0, y = 0
    for (let i = 0; i < dirs.length; i++) {
        const next = getNextPosition(dirs[i], x, y)
        if (next[0] > 5 || next[0] < -5 || next[1] > 5 || next[1] < -5) continue
        
        const a = `${x},${y}-${next[0]},${next[1]}`
        const b = `${next[0]},${next[1]}-${x},${y}`
        
        if (!set.has(a) && !set.has(b)) set.add(a)
        x = next[0], y = next[1]
    }
    return set.size
}