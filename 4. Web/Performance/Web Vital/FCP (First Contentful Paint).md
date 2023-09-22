> The user is no longer staring at a blank white screen. The general layout has been rendered, but the content is still missing. This is sometimes called FCP

* SSR的FCP會優於CSR
	* CSR：使用者在一開始會拿到一個空的`<div id="root"/>`與一包`js`，此時使用者會看到一片空白
	* SSR：使用者在一開始就會看見網頁基本的結構，但是在hydration完網頁才具有互動性