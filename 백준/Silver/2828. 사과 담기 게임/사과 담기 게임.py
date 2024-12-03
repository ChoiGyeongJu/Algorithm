import sys
input = sys.stdin.readline

n, m = map(int, input().split())
j = int(input())

left = 1
right = m

answer = 0
for _ in range(j):
    pos = int(input())
    if left <= pos <= right:
        continue
    elif left > pos:
        right -= (left - pos)
        answer += (left - pos)
        left = pos
    else: # right <= pos
        left += (pos - right)
        answer += (pos - right)
        right = pos

print(answer)