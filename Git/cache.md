mac在設定時如果沒有勾選要區分大小寫,有時候改檔名時會遇到沒辦法追蹤的問題

需要把git原本紀錄在cache的檔案刪除
```sh
git rm --cached xxx/list.tsx

# -r (遞迴/刪除資料夾)
```