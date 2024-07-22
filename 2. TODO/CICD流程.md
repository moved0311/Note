1. commit / push
2. `gitlab.yml` 觸發JOB
3. 有一台機器負責跑gitlab-runner程式，接收JOB來執行
		a. AWS
4.  執行JOB內容
		a. test / build project
		b. build docker image / push image to registry
		c. deploy beta/stage/prod
5. 