## Install TPM
* https://github.com/tmux-plugins/tpm#installing-plugins
```
git clone https://github.com/tmux-plugins/tpm ~/.config/tmux/plugins/tpm
```

```sh
# .config/tmux/tmux.conf

# List of plugins
set -g @plugin 'tmux-plugins/tpm'
set -g @plugin 'tmux-plugins/tmux-sensible'

# Install themes
set -g @plugin "nordtheme/tmux"

# Initialize TMUX plugin manager (keep this line at the very bottom of tm
run '~/.config/tmux/plugins/tpm/tpm'
```

1. Add new plugin to `~/.tmux.conf` with `set -g @plugin '...'`
2. Press `prefix` + I (capital i, as in **I**nstall) to fetch the plugin.

## theme
* https://github.com/nordtheme/tmux



