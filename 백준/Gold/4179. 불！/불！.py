from collections import deque
import sys
input = sys.stdin.readline

n, m = map(int, input().split())

graph = []
for _ in range(n):
    graph.append(list(map(str, input().rstrip())))

F = []
for i in range(n):
    for j in range(m):
        if graph[i][j] == 'J':
            J = [[i, j]]
        elif graph[i][j] == 'F':
            F.append((i, j))

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

def bfs(point):
    q = deque([])
    time = [[float('inf') for _ in range(m)] for _ in range(n)]
    for x, y in point:
        q.append((x, y))
        time[x][y] = 0
    
    while q:
        x, y = q.popleft()
        
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]

            if 0 <= nx < n and 0 <= ny < m and time[nx][ny] == float('inf'):
                if graph[nx][ny] == '.' or graph[nx][ny] == 'J':
                    time[nx][ny] = time[x][y] + 1
                    q.append((nx, ny))

    return time

jihun = bfs(J)
fire = bfs(F)

answer = float('inf')
for i in range(n):
    for j in range(m):
        if 0 < i < n - 1 and 0 < j < m - 1:
            continue

        if jihun[i][j] < fire[i][j]:
            answer = min(answer, jihun[i][j] + 1)

if answer == float('inf'):
    print('IMPOSSIBLE')
else:
    print(answer)