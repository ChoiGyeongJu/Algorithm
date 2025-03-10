n, m = map(int, input().split())

T = []
for _ in range(n):
    T.append(int(input()))

left = min(T)
right = max(T) * m
answer = right
while left <= right:
    mid = (left + right) // 2
    total = 0

    for i in range(n):
        total += mid // T[i]

    if total >= m:
        right = mid - 1
        answer = min(answer, mid)

    else:
        left = mid + 1

print(answer)