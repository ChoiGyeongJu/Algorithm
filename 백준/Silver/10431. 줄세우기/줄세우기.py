from bisect import bisect_left
import sys
input = sys.stdin.readline
p = int(input())

for _ in range(p):
    tmp = list(map(int, input().split()))

    arr = [tmp[1]]    
    cnt = 0
    for i in range(2, 21):
        idx = bisect_left(arr, tmp[i])
        cnt += (len(arr) - idx)
        arr.append(tmp[i])
        arr.sort()

    print(tmp[0], cnt, sep=' ')