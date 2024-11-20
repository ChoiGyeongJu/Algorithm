from collections import deque
import sys
input = sys.stdin.readline

n, m = map(int, input().split())

def bfs(start, end):
    queue = deque([(start, 0)])
    visited = [False] * 100001
    visited[start] = True

    while queue:
        x, time = queue.popleft()
        if x == end:
            print(time)
            return
        adj = [x + 1, x - 1, x * 2]
        for i in adj:
            if 0 <= i < 100001 and not visited[i]:
                queue.append((i, time + 1))
                visited[i] = True

bfs(n, m)