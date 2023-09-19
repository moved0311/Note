
- [Connecting to GitHub with SSH](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)

1. [Generating a new SSH key](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key)

```bash
$ ssh-keygen -t rsa -b 4096 -C [email@]
```

1. [Adding your SSH key to the ssh-agent](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent) paste `~/.ssh/id_rsa.pub`

```bash
$ eval "$(ssh-agent -s)"
> Agent pid 59566
```

```bash
$ ssh-add ~/.ssh/id_rsa
```

1. [Adding a new SSH key to your GitHub account](https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)