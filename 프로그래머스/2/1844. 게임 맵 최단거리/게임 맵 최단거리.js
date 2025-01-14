function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    function bfs() {
        const dx = [0, 0, 1, -1];
        const dy = [1, -1, 0, 0];

        let q = [[0, 0, 1]];
        while (q.length) {
            const [x, y, cnt] = q.shift();
            if (x === n - 1 && y === m - 1) return cnt;
            
            for (let i = 0; i < 4; i++) {
                const nx = dx[i] + x;
                const ny = dy[i] + y;
                if (0 <= nx && nx < n && 0 <= ny && ny < m && maps[nx][ny]) {
                    maps[nx][ny] = 0;
                    q.push([nx, ny, cnt + 1])
                }
            }
        }
        return -1;
    }
    return bfs();
}