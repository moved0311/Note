## Vim
2023/04/26

---

1.  模式
2. 移動、搜尋、其他常用
3.  個人化設定(vimrc)

---

```
vim test.md

Hello world
:w
:q
```

---

* 一般/普通模式 (Normal mode)
	* 游標移動
* 命令行模式 (Command mode)
	* 儲存、離開
* 插入模式 (Insert mode)
* 視覺模式 (Visual mode)

<br/> (所有模式下按ESC會到一般模式)

---

## 移動
|按件|功能|
|--|--|
|i|insert(進入插入模式)|
|hjkl|← ↓ ↑ →|
|gg|移動到檔案最上方|
|G|移動到檔案最下方|
|ctrl+d|向下移動半頁|
|ctrl+u|向上移動半頁|
|\:行數|跳到特定行數|
|$|跳到最後面|
|0|跳到最前面|
|w|前面單字開頭|
|e|跳到單字字尾|
|b|跳到上一個單字開頭|
|f x|跳到x上(按;重複上一個動作)|
|t x|跳到x前一格|


---

## 搜尋

|按件|功能|
|--|--|
|\/文字|搜尋文字|
|n|跳到下一個搜尋結果|
|N|跳到上一個搜尋結果|


---

## 其他常用

|按件|功能|
|--|--|
|x|刪除字(delete)|
|X|刪除字(倒退鍵)|
|dd|刪除整行|
|yy|複製整行|
|p|貼上|


---

```
"=================
"    一般設定
"=================
syntax on           "語法顏色
set nu              "顯示行數
set hlsearch        "搜尋顏色
set ic              "不區分大小寫
set history=50      "歷史指令保留數量
set tabstop=2       "Tab寬是兩個空白
set expandtab       "Tabtab用空白填滿
set shiftwidth=2    "自動縮排長度
set autoindent      "換行自動縮排
set smartindent     "換行自動縮排
set scrolloff=5     "滾動時下方保留行數
set encoding=utf-8  "編碼設定
set fileencoding=utf-8
```

---

```
"=================
"    快捷鍵
"=================
imap jj <Esc>

"move window when split (shift + h,j,k,l)
nnoremap <S-h>  <C-w>h
nnoremap <S-l>  <C-w>l
nnoremap <S-j>  <C-w>j
nnoremap <S-k>  <C-w>k
```

---

## Plugin
* https://github.com/junegunn/vim-plug

```
"=================
"   Plugin 
"=================
call plug#begin()
"NERDTree
Plug 'scrooloose/nerdtree'
map <F2> :NERDTreeToggle<CR>

"Airline 
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'

call plug#end()
```

---

## Reference
* [【Vim 編輯器 入門指南 (上)】用思維的速度寫程式 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10255325)