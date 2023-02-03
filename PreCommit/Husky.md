```shell
yarn init # 產生package.json
npx husky-init # 產生.husky
yarn install # 安裝husky相關套現
```

```shell
npx husky add .husky/pre-commit 'echo "Hello"' 
# 在.husky/pre-commit檔案插入後方指令。也可以直接修改pre-commit.sh檔案
```

在commit時,就會先執行`pre-commit.sh`做一些檢查動作

```shell
exit 1 # 會不能commit
```

## 怎麼運作的
1. husky install
	* 在`.husky/.git/config`塞入`hooksPath=.husky`  (`git config -e` 或是`git config --get core.hooksPath`查看)
	