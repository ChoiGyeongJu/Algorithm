from collections import deque

def solution(priorities, location):
    answer = 0
    queue = deque([])
    for i in range(len(priorities)):
        queue.append((priorities[i], i))

    while queue:
        prior, index = queue.popleft()
        if queue and max(queue)[0] > prior:
            queue.append((prior, index))
        else:
            answer += 1
            if index == location:
                break
    return answer
