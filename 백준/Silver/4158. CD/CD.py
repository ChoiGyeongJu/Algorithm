import bisect
import sys
input = sys.stdin.readline

while True:
    n, m = map(int, input().split())
    if n == 0 and m == 0:
        break
    sang = []
    sun = []

    for _ in range(n):
        sang.append(int(input()))
    for _ in range(m):
        sun.append(int(input()))
        
    cnt = 0
    for x in sang:
        idx = bisect.bisect_left(sun, x)
        # if idx >= n: 
        #     continue
        if x == sun[idx]:
            cnt += 1
    print(cnt)