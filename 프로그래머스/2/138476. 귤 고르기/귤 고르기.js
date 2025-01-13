function solution(k, tangerine) {
    const countMap = new Map();
    tangerine.forEach(v => {
        countMap.set(v, (countMap.get(v) || 0) + 1)
    })
    const sortedCount = [...countMap.values()].sort((a, b) => b - a)
    
    let cnt = 0;
    let total = 0;
    
    for (let i = 0; i < sortedCount.length; i++) {
        total += sortedCount[i];
        cnt += 1;
        if (total >= k) break;
    }
    return cnt;
}