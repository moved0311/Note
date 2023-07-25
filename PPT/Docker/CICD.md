---
margin: 0.1
width: 1200
height: 700
---

## CI~~CD~~
2023/07/26

---

## CICD流程
::: block <!-- element style="text-align: left"-->
開發 → commit → push\
<span class="hightlight">CI: 編譯 → 打包成 docker image → 推至gitlab儲存庫</span>\
CD: 部署到機器上 
:::

---

## 儲存庫
* [Docker hub](https://hub.docker.com/)
* [Gitlab Container Registry](https://gitlab.cnyes.cool/anue/frontend/fe-cnyes/container_registry)

---

## [Docker介紹](https://zh.wikipedia.org/zh-tw/Docker)

::: block <!-- element style="text-align: left" -->
####  環境安裝
* [Docker Desktop](https://www.docker.com/)<!-- element style="font-size: 32px" -->

#### Docker好處
* 環境問題<!-- element style="font-size: 32px" -->

#### 範例
* [getting-started](https://hub.docker.com/r/docker/getting-started)<!-- element style="font-size: 32px" -->
:::


---

## .gitlab-ci.yml
* [fe-lobby/.gitlab-ci.yml](https://gitlab.cnyes.cool/anue/frontend/fe-lobby/-/blob/develop/.gitlab-ci.yml)
* [share/util](https://gitlab.cnyes.cool/share/util)

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