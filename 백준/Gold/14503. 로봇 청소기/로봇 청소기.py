from collections import deque

n, m = map(int, input().split())

r, c, d = map(int, input().split())

graph = []
for _ in range(n):
    graph.append(list(map(int, input().split())))

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

answer = 1
graph[r][c] = 2

def is_dirty(x, y):
    for i in range(4):
        nx, ny = dx[i] + x, dy[i] + y

        if 0 <= nx < n and 0 <= ny < m:
            if graph[nx][ny] == 0:
                return True

    return False

info = deque([(r, c, d)])

while info:
    x, y, direct = info.popleft()

    if is_dirty(x, y): # 주변에 청소할 곳이 있으면,
        next_d = (direct - 1) if direct > 0 else 3
        nx, ny = dx[next_d] + x, dy[next_d] + y

        if 0 <= nx < n and 0 <= ny < m and graph[nx][ny] == 0:
            answer += 1
            graph[nx][ny] = 2
            info.append((nx, ny, next_d))

        else:
            info.append((x, y, next_d))

    else:
        nx, ny = x - dx[direct], y - dy[direct]

        if 0 <= nx < n and 0 <= ny < m and graph[nx][ny] != 1:
            info.append((nx, ny, direct))
        else:
            break

print(answer)