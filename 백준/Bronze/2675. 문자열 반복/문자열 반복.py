T = int(input())

for i in range(T):
    n, text = input().split()
    for s in text:
        print(int(n) * s, end='')
    print('')
