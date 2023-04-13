import sys
input = sys.stdin.readline

mo = ['a', 'e', 'i', 'o', 'u']

def is_1(ss): # 모음이 있는지 판단
    for s in ss:
        if s in mo:
            return True
    return False

def is_2(ss):
    if ss[0] in mo:
        flag = 1
    else:
        flag = 0

    cnt = 0
    for s in ss:
        if s in mo:
            if flag == 1:
                cnt += 1
            else:
                flag = 1
                cnt = 1
        else:
            if flag == 0:
                cnt += 1
            else:
                flag = 0
                cnt = 1

        if cnt >= 3:
            return False
    return True

def is_3(ss):
    for i in range(len(ss) - 1):
        if ss[i] == ss[i + 1]:
            if ss[i] == 'e' or ss[i] == 'o':
                continue
            else:
                return False
    return True

while True:
    flag = 1
    password = input().rstrip()

    if password == 'end':
        break

    if is_1(password) and is_2(password) and is_3(password):
        print(f'<{password}> is acceptable.')
    else:
        print(f'<{password}> is not acceptable.')