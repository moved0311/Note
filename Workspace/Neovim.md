
## Install
```
brew install neovim
```
或
```
curl -LO https://github.com/neovim/neovim/releases/download/nightly/nvim-macos.tar.gz
tar xzf nvim-macos.tar.gz
./nvim-macos/bin/nvim
```
在home會有`nvim-macos`資料夾,在將裡面的bin加到環境變數中
e.g. `export PATH="$PATH:$HOME/bin/nvim-macos/bin"`


## LazyVim
* https://www.lazyvim.org/installation

backup
```
mv ~/.config/nvim{,.bak}  
mv ~/.local/share/nvim{,.bak}  
mv ~/.local/state/nvim{,.bak}  
mv ~/.cache/nvim{,.bak}
```

`keymaps`
```
local opts = { noremap = true, silent = true }
local keymap = vim.api.nvim_set_keymap

-- Insert
keymap("i", "jj", "<ESC>", opts)
```


