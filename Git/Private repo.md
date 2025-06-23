settings 
\> developer settings 
\> personal access tokens 
\> generate new token

1. 移除舊的remote
	  git remote remove origin
2. 到github settings建立一組新的token
	* ghp_xxx
3. git remote add origin https://<TOKEN>@github.com/<USERNAME>/<REPO>.git