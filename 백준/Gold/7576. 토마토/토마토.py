from collections import deque

m, n = map(int, input().split())
graph = []
visited = [[False for _ in range(m)] for _ in range(n)]
for i in range(n):
    arr = list(map(int, input().split()))
    graph.append(arr)

queue = deque([])
for i in range(n):
    for j in range(m):
        if graph[i][j] == 1:
            queue.append((i, j, 0))
            visited[i][j] = True

day = 0

# 익은 토마토는 1, 익지 않은 토마토는 0, 비어있는 칸은 -1
while queue:
    x, y, day = queue.popleft()
    
    if x < n - 1 and graph[x + 1][y] != -1 and visited[x + 1][y] == False:
        queue.append((x+1, y, day + 1))
        graph[x + 1][y] = 1
        visited[x + 1][y] = True

    if y < m - 1 and graph[x][y + 1] != -1 and visited[x][y + 1] == False:
        queue.append((x, y + 1, day + 1))
        graph[x][y + 1] = 1
        visited[x][y + 1] = True
    
    if x > 0 and graph[x - 1][y] != -1 and visited[x - 1][y] == False:
        queue.append((x - 1, y, day + 1))
        graph[x - 1][y] = 1
        visited[x - 1][y] = True
    
    if y > 0 and graph[x][y - 1] != -1 and visited[x][y - 1] == False:
        queue.append((x, y - 1, day + 1))
        graph[x][y - 1] = 1
        visited[x][y - 1] = True

flag = True
for i in range(n):
    if 0 in graph[i]:
        flag = False
        break

if flag:
    print(day)
else:
    print(-1)