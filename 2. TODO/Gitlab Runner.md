公司架在AWS上的share runner壞了，導致每個team在推版上都會錯誤。目前在修好前應該會先採用手動的方式來推版。有兩種手動方式：
1. 手動在本地端打包成docker image推上gitlab，在把image位置給devops完成後面佈到k8s上。
2. 在自己電腦上起一個gitlab runner來跑推版流程





* [為你自己學 GitLab CI/CD Day 11 - 在本機的 GitLab Runner - YouTube](https://www.youtube.com/watch?v=wRXBztn6OkE&list=PLBd8JGCAcUAEwyH2kT1wW2BUmcSPQzGcu&index=11)