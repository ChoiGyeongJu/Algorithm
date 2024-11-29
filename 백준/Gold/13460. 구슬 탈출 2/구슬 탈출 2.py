from collections import deque
import sys
input = sys.stdin.readline

dx = [1, -1, 0, 0]
dy = [0, 0, -1, 1]

n, m = map(int, input().split())
grid = []
for _ in range(n):
    grid.append(list(map(str, input().rstrip())))

def getPos():
    rx, ry, bx, by = 0, 0, 0, 0
    for i in range(n):
        for j in range(m):
            if grid[i][j] == 'R':
                rx, ry = i, j
            elif grid[i][j] == 'B':
                bx, by = i, j
    return rx, ry, bx, by

def move(x, y, dx, dy):
    cnt = 0
    while grid[x + dx][y + dy] != "#" and grid[x][y] != "O":
        x += dx
        y += dy
        cnt +=1
    return x, y, cnt

visited = set()
def bfs():
    rx, ry, bx, by = getPos()
    queue = deque()
    queue.append((rx, ry, bx, by, 1))
    visited.add((rx, ry, bx, by))

    while queue:
        rx, ry, bx, by, cnt = queue.popleft()
        if cnt > 10:
            print(-1)
            return
        for i in range(4):
            nrx, nry, rcnt = move(rx, ry, dx[i], dy[i])
            nbx, nby, bcnt = move(bx, by, dx[i], dy[i])

            if grid[nbx][nby] == 'O':
                continue
            if grid[nrx][nry] == 'O':
                print(cnt)
                return
            if nrx == nbx and nry == nby:
                if rcnt > bcnt:
                    nrx -= dx[i]
                    nry -= dy[i]
                else:
                    nbx -= dx[i]
                    nby -= dy[i]
            if (nrx, nry, nbx, nby) not in visited:
                visited.add((nrx, nry, nbx, nby))
                queue.append((nrx, nry, nbx, nby, cnt + 1))
    print(-1)
bfs()