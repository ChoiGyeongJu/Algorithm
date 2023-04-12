import sys
input = sys.stdin.readline

s = set()
m = int(input())

for _ in range(m):
    command = input().rstrip().split()
    if len(command) == 1:
        if command[0] == 'all':
            s = set([i for i in range(1, 21)])

        elif command[0] == 'empty':
            s = set()
        continue

    else:
        c, x = command[0], int(command[1])

        if c == 'add':
            s.add(x)

        elif c == 'remove':
            s.discard(x)

        elif c == 'check':
            if x in s:
                print(1)
            else:
                print(0)

        elif c == 'toggle':
            if x in s:
                s.remove(x)
            else:
                s.add(x)
