## String

```py
word = "abcdefg"

word[0:3] # abc
```

## For Loop

range不會包含右側

```py
for i in range(5, 1, -1):
    print(i)
# 5
# 4
# 3
# 2
```

```
[x if i % 2 == 0 else '%' for i,x in enumerate(a)]
```
## enumerate

```py
nums = [1, 6, 4, 2]

for index, num in enumerate(nums):
    print(index, num)
```

## Set
```py
strs = ["aaa","cb", "a", "ab", "abc", "a", "ab"]

wordDict = set(strs) # {'a', 'aaa', 'ab', 'abc', 'cb'}

'a' in wordDict # True
```


## 二分搜尋
```py
import bisect

nums = [1, 2, 4, 6, 8, 9]

bisect.bisect_right(nums, 6) # 4
bisect.bisect_left(nums, 6)  # 3
```

## Counter 
```py
from collections import Counter

nums = [1, 2, 2, 3, 3, 4, 3, 4, 1, 4, 4, 4]

num, freq = Counter(nums).most_common(1)[0]

print(num, freq) # 4, 5
```

## 讀檔
```python
with open('test') as file:
    lines = file.read().strip().split('\n')
```

