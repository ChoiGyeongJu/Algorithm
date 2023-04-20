H, W = map(int, input().split())
wall = list(map(int, input().split()))

answer = 0
for i in range(1, W - 1):
    left = max(wall[:i])
    right = max(wall[i+1:])

    if min(left, right) > wall[i]:
        answer += min(left, right) - wall[i]

print(answer)