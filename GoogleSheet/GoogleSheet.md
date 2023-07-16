* 參考格子裡面的值
	* indirect
* 把不為空的格子號碼拼起來
```
=textjoin("",true,arrayformula(if(K2:K<>"","K"&row(K:K)+1,"")))
```
