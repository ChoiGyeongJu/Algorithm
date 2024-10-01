import sys

n = int(sys.stdin.readline()) # 11

num = 1

while True:
    value = num
    for s in str(num):
        value += int(s)

    if (value == n):
        print(num)
        break
    if (num == n):
        print(0)
        break

    num += 1