import math
import sys
input = sys.stdin.readline

a, b, c = map(int, input().split())

def getValue(x):
    return round(a * x + b * math.sin(x), 10)

start = 0
end = 100000

while abs(start - end) > 10**(-9):
    mid = (start + end) / 2
    val = getValue(mid)

    if val > c:
        end = mid
    else:
        start = mid
print(mid)