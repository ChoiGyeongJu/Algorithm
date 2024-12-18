from collections import deque
n = int(input())

for _ in range(n):
    a, b = map(int, input().split())

    q = deque([(a, '')])
    visited = [False] * 10000

    while q:
        x, command = q.popleft()
        visited[x] = True

        if x == b:
            print(command)
            break

        # D
        num2 = (x * 2) % 10000
        if not visited[num2]:
            q.append((num2, command + 'D'))

        # S
        if x == 0:
            num2 = 9999
        else:
            num2 = x - 1
        if not visited[num2]:
            q.append((num2, command + 'S'))

        num2 = (10 * x + (x // 1000)) % 10000
        if not visited[num2]:
            q.append((num2, command + "L"))
            visited[num2] = True
            
        # 4
        num2 = (x // 10 + (x % 10) * 1000) % 10000
        if not visited[num2]:
            q.append((num2, command + "R"))
            visited[num2] = True