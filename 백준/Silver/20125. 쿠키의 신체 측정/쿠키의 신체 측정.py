import sys
input = sys.stdin.readline

n = int(input())

graph = []
for _ in range(n):
    graph.append(list(input()))
    
heart = []
for i in range(1, n - 1):
    for j in range(1, n - 1):
        if graph[i][j] == '*':
            if graph[i - 1][j] == '*' and graph[i][j - 1] == '*' and graph[i][j + 1] == '*' and graph[i + 1][j] == '*':
                heart = [i, j]
                break
    if len(heart) > 0:
        break

print(heart[0] + 1, heart[1] + 1)

dx = [0, 0, 1]
dy = [-1, 1, 0]

def get_len(x, y, direct):
    cnt = 0
    nx = x
    ny = y
    
    while True:
        nx += dx[direct]
        ny += dy[direct]

        if 0 <= nx < n and 0 <= ny < n:
            if graph[nx][ny] == '*':
                cnt += 1

            else:
                break
        else:
            break

    return cnt

mid = get_len(heart[0], heart[1], 2)
for i in range(5):
    if i <= 2:
        print(get_len(heart[0], heart[1], i), end = ' ')
    elif i == 3:
        print(get_len(heart[0] + mid, heart[1] - 1, 2), end = ' ')

    else:
        print(get_len(heart[0] + mid, heart[1] + 1, 2))