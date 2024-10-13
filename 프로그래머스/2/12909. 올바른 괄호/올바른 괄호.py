def solution(s):
    answer = True

    check = []
    for v in s:
        if v == '(':
            check.append(v)
        elif v == ')':
            try:
                check.pop()
            except:
                return False
    return len(check) == 0