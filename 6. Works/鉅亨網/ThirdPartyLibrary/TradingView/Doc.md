
- [TradingView 中文开发文档](https://aitrade.ga/books/tradingview/)
- resolveSymbol欄位出錯(70%問題發生在這) [https://github.com/tradingview/charting_library/wiki/UDF](https://github.com/tradingview/charting_library/wiki/UDF)
    - UDF欄位解釋 [https://github.com/tradingview/charting_library/wiki/Symbology#symbolinfo-structure](https://github.com/tradingview/charting_library/wiki/Symbology#symbolinfo-structure)

### 技術線圖(Study)

```jsx
tv.current.createStudy('Volume', true, false, { length: 1, smoothingLength: 1 });

// console.log(tv.current.getStudyInputs('Volume')) 
// 查看Volume有什麼屬性，第四個參數可以調整key為id屬性的
```

## All features
- [https://github.com/tradingview/charting_library/wiki/Featuresets](https://github.com/tradingview/charting_library/wiki/Featuresets)


## 相關票
* [[2022-04-08]] 虛擬貨幣頻道TradingView升級至v21
* [[1. Daily/2023/2023-03-20|2023-03-20]] 最新價格使用220026字串版本，小數點位數由後端控制
* [[2024-02-20]] 外匯看盤室要使用TradingView元件