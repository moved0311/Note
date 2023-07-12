## ISR (Icreamental Static Regeneration)

ISR在SSR與SSG間取得平衡。SSR需要整頁重新產生, SSG則是產生固定內容就無法變動。
傳統靜態頁面(SSG)在編譯時產生網站的所有頁面,有任何更動會將網站的所有頁面重新編譯

ISR可以設定一個固定時間去重新產生頁面(revalidation)
  * ISR能夠更新一個page,不用整個site都重新build
  * 假設一個部落格站有10篇文章(page),在傳統SSG更新其中一篇文章,需要10篇都重新編譯。在ISR能夠做到只針對改動的文章做編譯,可以節省編譯時間又不會失去SSG的效能。

之前在寫nextjs有getStaticProps就是一種ISR實作？
* 之前在寫nextjs SSR部分有一些元件是要先被載入,例如新聞標題。就會在getStaticProps內先call api後直接傳到page內顯示，做到SSR效果。這就是一種ISR? 只是沒有固定一段時間就去call api。

適合用在頻繁更新資料的頁面,如股市報價,成交資訊，聊天室。


SSR：每一個request請求,SSR會針對每個請求在Server生成HTML頁面,回傳給使用者。
ISR: 每隔一段時間會做revalidate,應該可以針對不同page設定？在這段期間內使用者看到的都是預先生成好的頁面,相同於SSG,但是可以針對單一頁面進行更新(重新編譯)

[Next.js App Router: Routing, Data Fetching, Caching](https://www.youtube.com/watch?v=gSSsZReIFRk)
API: http://worldtimeapi.org/api/timezone/Asia/Taipei
可以用來測試ISR


## Reference
* [Incremental Static Regeneration (ISR) in Next.js](https://blog.openreplay.com/incremental-static-regeneration-in-nextjs/)


