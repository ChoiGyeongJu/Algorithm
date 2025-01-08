from collections import deque

def bfs(m, n, h, box, days):
    dx = [-1, 1, 0, 0, 0, 0]
    dy = [0, 0, -1, 1, 0, 0]
    dz = [0, 0, 0, 0, -1, 1]
    
    q = deque()
    for k in range(h):
        for i in range(n):
            for j in range(m):
                if box[k][i][j] == 1:
                    q.append((k, i, j))

    while q:
        z, x, y = q.popleft()
        for i in range(6):
            nx, ny, nz = x + dx[i], y + dy[i], z + dz[i]
            if 0 <= nx < n and 0 <= ny < m and 0 <= nz < h:
                if box[nz][nx][ny] == 0:
                    q.append((nz, nx, ny))
                    box[nz][nx][ny] = box[z][x][y] + 1
                    days[0] = max(days[0], box[nz][nx][ny] - 1)

    for k in range(h):
        for i in range(n):
            for j in range(m):
                if box[k][i][j] == 0:
                    return -1

    return days[0]

m, n, h = map(int, input().split())
box = [[[int(x) for x in input().split()] for j in range(n)] for k in range(h)]
days = [0]
result = bfs(m, n, h, box, days)

print(result)
