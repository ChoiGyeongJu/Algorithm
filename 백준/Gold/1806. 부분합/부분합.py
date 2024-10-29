import sys
input = sys.stdin.readline
n, s = map(int, input().split())
numList = list(map(int, input().split()))

if sum(numList) < s:
    print(0)
    exit()

end = 0
tmp = 0
answer = n
for start in range(n):
    while tmp < s and end < n:
        tmp += numList[end]
        end += 1
    
    if tmp >= s:
        answer = min(answer, end - start)
    tmp -= numList[start]

print(answer)