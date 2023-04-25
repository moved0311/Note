## Vim
2023/04/26

---

1.  模式
2.  設定

---

* 一般模式 (Normal mode)
* 命令模式 (Command mode)
* 插入模式 (Insert mode)
* 視覺模式 (Visual mode)

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