import sys
input = sys.stdin.readline

n = int(input())

def recursion(s, l, r, cnt):
    if l >= r: return [1, cnt]
    elif s[l] != s[r]: return [0, cnt]
    else: return recursion(s, l + 1, r - 1, cnt + 1)


for _ in range(n):
    s = input().rstrip()
    print(*recursion(s, 0, len(s) - 1, 1))
