1. commit / push
2. `gitlab.yml` 觸發JOB
3. 有一台機器負責跑gitlab-runner程式，接收JOB來執行
		a. AWS
4.  執行JOB內容
	a. test / build project
	b. build docker image / push image to registry
	c. deploy beta/stage/prod
5.  每一個JOB根據不同base image可以有不同預設安裝程式
	* 例如前端一般的基底大多是nodejs，但根據需求不同可能還需要多加yarn、pnpm。所以可以根據需求另外再自己打包一個image包含nodejs與pnpm的image
	* 在推版專用的image也是一個自己打包特別的image，前人寫的基礎架構裡包含python腳本、kubectl、ansible-playbook等。
6. JOB執行成功/失敗