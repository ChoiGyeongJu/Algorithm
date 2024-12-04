import sys
input = sys.stdin.readline

n = int(input())
grid = [[] for _ in range(n + 1)]
for i in range(n):
    x = int(input())
    grid[x].append(i + 1)

result = []
for i in range(1, n + 1):
    visited = [0] * (n + 1)
    stack = [i]
    visited[i] = 1
    while stack:
        v = stack.pop()
        for next in grid[v]:
            if not visited[next]:
                stack.append(next)
                visited[next] = 1
            elif visited[next] and i == next:
                result.append(next)

print(len(result))
print(*result, sep='\n')