import heapq
import sys

n, k = map(int, input().split())
j = []
bag = []

for _ in range(n):
    x = list(map(int, sys.stdin.readline().split()))
    j.append(x)

for _ in range(k):
    bag.append(int(sys.stdin.readline()))

j.sort()
bag.sort()

answer = 0
tmp = []

for b in bag:
    while j:
        if b >= j[0][0]:
            heapq.heappush(tmp, -j[0][1])
            heapq.heappop(j)
        else:
            break
    
    if tmp:
        answer += heapq.heappop(tmp)
    
    # elif not j:
    #     break

print(-answer)