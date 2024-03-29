---
width: 1400
height: 800
center: false
theme: night
margin: 0.1
---

## TradingView

---

## Result

<img src="/PPT/TradingView/result.png" height="500" />

---

# Quick Start

---

建立專案

```sh
# node: v20.7.0
npx create-react-app tradingview-app --template typescript # 建立新的React專案
cd tradingview-app # 進到專案目錄
npm i # 安裝相依套件
npm start # 啟動專案
```

---

- 下載 tradingview-charting-library(需要權限)
  - https://github.com/tradingview/charting_library/
- Document:
  - https://www.tradingview.com/charting-library-docs/
- 各種語言範例:
  - https://github.com/tradingview/charting-library-examples

---

將 charting_library 與 datafeeds 放到`/public`下

<img src="/PPT/TradingView/put-to-public.png" height="550" />

---

在 index.html 的\<head\>內加入 script, <br/>
會在瀏覽器的 window 加上 TradingView 與 Datafeeds 物件

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

<img src="/PPT/TradingView/AAPL.png" />

---

# 串接 API

Document: [Datafeed-Implementation](https://www.tradingview.com/charting-library-docs/latest/tutorials/implement_datafeed_tutorial/Datafeed-Implementation/)

---

<!-- element class="code-fit-content" -->

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
    });
  }, []);

  return <div id="chartContainer"></div>;
};
```


---

<!-- element class="code-fit-content" -->

```ts
import DataFeed from "./datafeed";

const index = () => {
  useEffect(() => {
    new window.TradingView.widget({
      container: "chartContainer",
      locale: "zh_TW",
      library_path: "charting_library/",
      datafeed: DataFeed, // <-- 實作自己的DataFeed
      symbol: "AAPL",
      interval: "1D",
    });
  }, []);

  return <div id="chartContainer"></div>;
};
```

---

<!-- element class="code-fit-content" -->

```ts
const DataFeed = {
  onReady: (callback) => {
    console.log("[onReady]: Method call");
  },
  searchSymbols: () => {
    console.log("[searchSymbols]: Method call");
  },
  resolveSymbol: () => {
    console.log("[resolveSymbol]: Method call");
  },
  getBars: () => {
    console.log("[getBars]: Method call");
  },
  subscribeBars: () => {
    console.log("[subscribeBars]: Method call with subscriberUID:");
  },
  unsubscribeBars: () => {
    console.log("[unsubscribeBars]: Method call with subscriberUID:");
  },
};

export default DataFeed;
```

---

<img src="/PPT/TradingView/flow.png" height="700"  />

---

- Source Code:
  - https://gitlab.cnyes.cool/taiyijiang/tradingview/-/tree/master


<style>
pre,code {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

p, ul {
  font-size: 36px;
  line-height: 36px;
  text-align: left;
}

li {
  margin-bottom: 24px;
  margin-top: 24px;
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

.code-fit-content {
  pre > code {
    max-height: fit-content;
  }
}
</style>
