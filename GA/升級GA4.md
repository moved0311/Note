## 區分新版與舊版GA

舊版GA: 通用Analytics (分析), 通用GA, GA3, 資源ID開頭是UA (UA-XXXXXXXXX-1)
新版GA: Google Analytics (分析) 4, GA4, 資源ID只有數字 (G-XXXXXXXXXX)

##  基本概念




## GA Class
目前GA管理方式使用React Context來存放GA Class物件, 用物件管理的好處是如果需要上下層元件的某個值可以在那層設定完後, 再將整個物件往下傳遞。例如：Tab-SubTab的範例，當我點擊SubTab，希望傳遞的GA事件是要紀錄為"{Tab}-{SubTab}"，會遇到子層元件的需要父層元件的值。
當情況一複雜，元件本身可能會多很多奇怪的Props，但用GA Class管理就只需要傳遞GA Class的實體，本身也能繼繻做修改。當要真正的使用在元素上，也可以在呼叫Class方法將設定的變數取出。

```ts
import AnalyticsContext from 'context/AnalyticsContext';

const Example = () => {
	 const { getGaEvent } = useContext(AnalyticsContext);
}

export default Example
```
```ts
import React, { FC, useContext } from 'react';
import AnalyticsContext from 'context/AnalyticsContext';
const { getGaEvent } = useContext(AnalyticsContext);
  const gaEvent = getGaEvent
  ? getGaEvent('FundsTreeMap.Tab')
      .label(label.name)
      .clickItem(label.name)
      .toGaDataset()
  : {};
```
