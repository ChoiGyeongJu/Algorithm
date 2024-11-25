import sys
input = sys.stdin.readline

n, k = map(int, input().split())
arr = []
for _ in range(n):
    arr.append(int(input()))

start, end = 1, max(arr)
answer = 0
while start <= end:
    mid = (start + end) // 2
    cnt = 0
    for x in arr:
        cnt += (x // mid)

    if cnt >= k:
        answer = mid
        start = mid + 1
    else:
        end = mid - 1
print(answer)