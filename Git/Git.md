* 設定pull預設拉回的branch
```sh
git branch --set-upstream-to=origin/main    
```

## restore

清掉修改檔案(尚未add)
```
git restore .
```

清掉新增檔案(restore清不掉)
```
git reset --hard
git clean -fd
```