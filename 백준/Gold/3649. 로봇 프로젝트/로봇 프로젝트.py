from itertools import combinations
import sys
input = sys.stdin.readline

while True:
    try:
        x = int(input()) # 구멍의 너비
        n = int(input()) # 레고 개수

        lego = []
        for _ in range(n):
            lego.append(int(input()))
        lego.sort()

        if n < 2:
            print('danger')
            continue

        start = 0
        end = n - 1

        while True:
            if (lego[start] + lego[end]) == x * (10 ** 7):
                print(f'yes {lego[start]} {lego[end]}')
                break

            elif (lego[start] + lego[end]) > x * (10 ** 7):
                end -= 1

            elif (lego[start] + lego[end]) < x * (10 ** 7):
                start += 1

            if start >= end:
                print('danger')
                break        

    except:
        break