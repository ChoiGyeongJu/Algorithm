from collections import deque
import sys

n, k = map(int, sys.stdin.readline().split())

queue = deque([i for i in range(1, n + 1)])
result = []
cnt = 0

while len(queue) > 0:
    tmp = queue.popleft()
    
    queue.append(tmp)
    cnt += 1
    if (cnt == k):
        result.append(tmp)
        queue.pop()
        cnt = 0

print('<', end='')
for i in result:
    print(i, end='')
    if (i != result[-1]):
        print(',', end=' ')
print('>')