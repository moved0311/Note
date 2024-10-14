
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


