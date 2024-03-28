## Command

2023/10/4

---

## `ls`

顯示目前目錄成員列表

- -a (包含隱藏檔案/目錄)

---

## `clear`

::: block
Clear the terminal display

- ctrl + L
  ::: block

---

## `cd`

"chage **d**irectory" 切換工作目錄

::: block <!-- element style="text-align: left"-->

- `cd ~` 回到 home 目錄
- `cd ..` 回到上一層目錄
- `cd -` 回到前一個目錄
  :::

---

## `touch`

產生檔案

---

## `mkdir`

"make directory"
建立目錄

- `mkdir -p a/b/c`
  - p (parents)

---

## `cp`

複製檔案/目錄

---

## `mv`

移動檔案/目錄\
在同一個目錄下也可用來重新命名

---

## `rm`

刪除檔案/目錄

- -r 刪除資料夾

---

## `pwd`

顯示目前位置

---

## `echo`

`echo "Hello World"`

---

## `cat`

"concatenate"\
印出檔案內容

---

## `grep`

`grep -r "Hello" .`

---

## `wc`

::: block
"word count"\
`wc file.txt`

- line
- words
- byte-size
  :::

---

## `which`

查看指令完整路徑

---

## `man`

::: block <!-- element style="text-align: left"-->
指令手冊文件

- `man ls`
- `man pwd`
  :::

---

## `cal`

::: block
印出日曆

- `date` 印出日期
  :::

---

## `bc`

計算機

---

## `sort`

`sort filename`

---

## `chmod`

::: block <!-- element style="text-align: left"-->
"chnage mode"

- File Type (-, d)
- r (read)
- w (write)
- x (execute)
- Owner/Group/Other Users

`chmod +x script`\
`chmod u+x ./script.sh`
:::

---

## Reference

- [The 40 Most-Used Linux Commands You Should Know](https://kinsta.com/blog/linux-commands/)

<style>
code {
	color: yellow;
}

div {
    text-align: left;
}

</style>
