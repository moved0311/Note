## Slack Messages
2023/01/04

---

## Contents
* 建立Web hook
* 測試Web hook(Postman / Shell)
* Slack Message樣板
* Gitlab CICD

---

## 建立一組Web hook

[slack app custom integrations](https://cnyesteam.slack.com/apps/manage/custom-integrations)


管理 > 自訂整合 > 傳入的WebHook > 新增至Slack

---

* 擇要傳送訊息的群組，會得到一組Webhook URL

![PostToChannel](postToChannel.png)

---

透過Postman來傳送訊息到Slack

![Postman example](postman.png)

---

* 透過shell script執行 
![slack-message-template](./slack-mseesage.png)

---

Slack Message樣板

https://app.slack.com/block-kit-builder/

---

Gitlab CI

![gitlab.yaml](gitlab-ci.png)

---

![gitlab-cicd-2](gitlab-cicd-2.png)

---

Github Predefine variables

[Predefined variables reference | GitLab](https://docs.gitlab.com/ee/ci/variables/predefined_variables.html)

---

推坑 [Obsidian](https://obsidian.md/)
* Ｍarkdown筆記
* 能夠存在自己的儲存空間
* 關聯圖

---

![notion v.s. obisian](notion_obsidian.png)

---

Source Code: [gitlab-slack](https://gitlab.cnyes.cool/taiyijiang/gitlab-slack/-/tree/master)