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

### 取消git add .

```
git reset --mixed
```

### Commit

### 拆commit

`git reset head^`

### LOG

### 看單一檔案歷史修改紀錄

```bash
git log -p filename
```

## Merge

### Pull lastest code to current branch

在feature-xxx branch下

```bash
git pull origin master --rebase
```

解完衝突後要`git add .` 如果還沒rebase完成，要執行`git rebase --coninute`直到rebase完成

### B合併至A，以B為主

```python
git merge -s recursive -X theirs B
```

## Branch

### 修改Branch名稱

```bash
git branch -m <new_name>
git push origin -u <new_name>

# delete old branch
git push origin --delete <old_name>
```


## Commit

### git rebase -i #commitNumber

```
git log --oneline 	  # 查看log,每個commit只顯示一行
git rebase -i cc7db2d    # 可以編輯cc7db2d之後繳交的commit
# pick   保留這個commit
# squash 與前一個commit合併,設定好pick和squash後儲存退出
# 之後會顯示所有commit,可以編輯為一個commit
```

## Stash

在commit後想要切換到其他branch時，會把commit一起帶過去新的branch。但是可以使用`git stash`將commit暫存在目前branch中，之後其他branch的事情弄完切回來後，在將暫存的commit拿出來使用。

```bash
git stash
git stash list  # 看保存了哪些暫存
git stash apply # 把暫存拿出來使用
git stash apply stash@{1} # 使用第一個暫存
git stash drop stash@{1} # 刪除第一個暫存
```