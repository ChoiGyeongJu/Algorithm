from collections import deque

a, b, c = map(int, input().split())

visited = [[False for _ in range(b + 1)] for _ in range(a + 1)]
visited[0][0] = True

answer = []
q = deque([(0, 0)])

def pour(x, y):
    if not visited[x][y]:
        visited[x][y] = True
        q.append((x, y))

def bfs():
    global answer

    while q:
        x, y = q.popleft()
        z = c - x - y  # z는 c에 있는 물의 양
        
        if x == 0:
            answer.append(z)

        # a에서 물 이동
        water = min(x, b - y)
        pour(x - water, y + water)

        water = min(x, c - z)
        pour(x - water, y)

        # b에서 물 이동
        water = min(y, a - x)
        pour(x + water, y - water)

        water = min(y, c - z)
        pour(x, y - water)

        # c에서 물 이동
        water = min(z, a - x)
        pour(x + water, y)

        water = min(z, b - y)
        pour(x, y + water)

bfs()
answer.sort()
print(*answer)