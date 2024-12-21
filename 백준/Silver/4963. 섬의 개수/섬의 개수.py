import sys
from collections import deque

input = sys.stdin.readline

dx = [0, 0, 1, -1, -1, 1, -1, 1]
dy = [1, -1, 0, 0, -1, 1, 1, -1]

while True:
    w, h = map(int, input().split())
    if w == 0 and h == 0:
        break

    grid = []
    for i in range(h):
        grid.append(list(map(int, input().split())))

    visited = [[False]*w for _ in range(h)]
    def bfs(i, j):
        visited[i][j] = True
        queue = deque([(i, j)])

        while queue:
            x, y = queue.popleft()
            for i in range(8):
                nx, ny = dx[i] + x, dy[i] + y
                if 0 <= nx < h and 0 <= ny < w:
                    if not visited[nx][ny] and grid[nx][ny] == 1:
                        visited[nx][ny] = True
                        queue.append((nx, ny))
        
    answer = 0
    for i in range(h):
        for j in range(w):
            if grid[i][j] == 1 and not visited[i][j]:
                bfs(i, j)
                answer += 1
    print(answer)