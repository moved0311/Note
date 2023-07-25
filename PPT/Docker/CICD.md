---
margin: 0.1
width: 1200
height: 700
---

## CICD
2023/07/26

---

## CICD流程
::: block <!-- element style="text-align: left"-->
開發 → commit → push\
<span class="hightlight">CI: 編譯 → 打包成image → 推至儲存庫</span>\
CD: 部署到機器上 
:::

---

## .gitlab-ci.yml
* [fe-lobby/.gitlab-ci.yml](https://gitlab.cnyes.cool/anue/frontend/fe-lobby/-/blob/develop/.gitlab-ci.yml)
* [share/util](https://gitlab.cnyes.cool/share/util)

---

## Docker介紹

---

## 環境安裝
* [Docker Desktop](https://www.docker.com/)

---

:::
## 範例
[getting-started](https://hub.docker.com/r/docker/getting-started)
<!-- element style="text-align: left" -->

docker pull docker/getting-started
<!-- element style="text-align: left" -->
:::

---

## 儲存庫
* [Docker hub](https://hub.docker.com/)
* [Gitlab Container Registry](https://gitlab.cnyes.cool/anue/frontend/fe-cnyes/container_registry)

---

## CICD流程
開發 → commit → push\
CI: 測試 → 編譯 → 打包成image → 推至儲存庫\
CD: 部署到機器上
<!-- element style="text-align: left" -->


---

## 推版到Gitlab Container Registry範例
* https://gitlab.cnyes.cool/taiyijiang/docker



<style>
.hightlight {
	color: yellow;
}
.green {
	color: green;
}
</style>