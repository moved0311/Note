## ISR (Icreamental Static Regeneration)

ISR在SSR與SSG間取得平衡。SSR需要整頁重新產生, SSG則是產生固定內容就無法變動。
ISR可以設定一個固定時間去重新產生頁面(revalidation)
  * ISR能夠更新局部頁面,不用整個網頁重新build

之前在寫nextjs有getStaticProps就是一種ISR實作？
* 之前在寫nextjs SSR部分有一些元件是要先被載入,例如新聞標題。就會在getStaticProps內先call api後直接傳到page內顯示，做到SSR效果。這就是一種ISR? 只是沒有固定一段時間就去call api。

適合用在頻繁更新資料的頁面,如股市報價,成交資訊，聊天室。

## Reference
* [Incremental Static Regeneration (ISR) in Next.js](https://blog.openreplay.com/incremental-static-regeneration-in-nextjs/)