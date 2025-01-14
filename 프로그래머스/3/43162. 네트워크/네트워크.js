function solution(n, computers) {
    let grid = Array.from({length: n + 1}, () => [])
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (computers[i][j] === 1) {
                grid[i + 1].push(j + 1)
            }
        }
    }
    let visited = Array.from({legth: n + 1}, () => false);
    visited[0] = true;
    
    function dfs(x) {
        visited[x] = true;
        for (const next of grid[x]) {
            if (!visited[next]) dfs(next);
        }
    }
    
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            answer += 1;
            dfs(i)
        }
    }
    return answer;
}