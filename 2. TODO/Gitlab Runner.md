公司架在AWS上的share runner壞了，導致每個team在推版上都會錯誤。目前在修好前應該會先採用手動的方式來推版。有幾種手動方式：
1. 手動在本地端打包成docker image推上gitlab，在把image位置給devops完成後面佈到k8s上。
2. 在自己電腦上起一個gitlab runner來跑推版流程

方法1：在本地端build和打包成Image沒問題，推到gitlab上也沒問題。
推到gitlab指令: `docker push [公司Gitlab網址]/[Image名稱]:[版本號碼]`
每次推完後要把image地址給devops完成後面步驟。

方法2：要先在本機[安裝gitlab runner](https://docs.gitlab.com/runner/install/osx.html)，之後要在Gitlab頁面的`Settings > Runners`註冊`Specific runners`讓自己的電腦可以當作gitlab runner來跑，預設是使用share runner。
缺點是：電腦需要分資源跑gitlab runner程式，docker要一直開著，電腦已經很慢還會再更慢。跑完後機器上會多一堆images，每一個都500+MB。

詳細註冊方式參考: [為你自己學 GitLab CI/CD Day 11 - 在本機的 GitLab Runner - YouTube](https://www.youtube.com/watch?v=wRXBztn6OkE&list=PLBd8JGCAcUAEwyH2kT1wW2BUmcSPQzGcu&index=11)


https://hub.docker.com/_/alpine

互動模式下執行docker image 
`docker run -it [image]`

```
ansible-playbook -i /etc/ansible/roles/fe-cnyes/inventory /etc/ansible/roles/fe-cnyes/deployment.yaml -e stage=beta -e project_image_tag=latest -e etcd_branch=master -e ci_commit_ref_slug=release-4-123-0`
```
