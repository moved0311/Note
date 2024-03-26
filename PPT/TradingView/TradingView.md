## TradingView

## Result

<img src="/PPT/TradingView/result.png" width="500" />

---

## Quck Start

建立專案

```sh
# node: v20.7.0
npx create-react-app tradingview-app --template typescript # 建立新的React專案
cd tradingview-app # 進到專案目錄
npm i # 安裝相依套件
npm start # 啟動專案
```

---

- 下載 tradingview-charting-library
  - https://github.com/tradingview/charting_library/
- Document:
  - https://www.tradingview.com/charting-library-docs/
- 各種語言下的範例:
  - https://github.com/tradingview/charting-library-examples

---

將`charting_library` 與 `datafeeds` 放到`src/`(`/public`)下

<img src="/PPT/TradingView/put-to-public.png" height="360" />

---

在 index.html 的\<head\>內加入 script, 會在瀏覽器的 window 加上 TradingView 與 Datafeeds 物件

```html
<head>
  ...
  <script src="charting_library/charting_library.standalone.js"></script>
  <script src="datafeeds/udf/dist/bundle.js"></script>
</head>
```

---

```ts
const index = () => {
  useEffect(() => {
    new window.TradingView.widget({
      container: "chartContainer",
      locale: "zh_TW",
      library_path: "charting_library/",
      datafeed: new window.Datafeeds.UDFCompatibleDatafeed("https://demo-feed-data.tradingview.com"),
      symbol: "AAPL",
      interval: "1D",
      fullscreen: true,
    });
  }, []);

  return <div id="chartContainer"></div>;
};
```

---

<style>
p, ul {
  font-size: 36px;
}

ul > li > ul {
  font-size: 28px;
}

code  {
  padding: 2px 4px;
  font-size: 90%;
  color: #c7254e; 
  background-color: #f9f2f4;
  border-radius: 4px;
}
</style>
