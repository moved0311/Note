## 專案需求分析

- 舊版: [即時頭條](https://news.cnyes.com/news/cat/headline)
- 新版內頁: [Desktop Detail](https://app.zeplin.io/project/576287bda89e8aa7045cfba5/screen/5fffe82666ea75207502eeef)

**老闆角度：**

- 迭代速度 ↑
- 營收 ↑
  - 廣告速度·
  - 搜尋排名 SEO
  - GA 分析(元件成效/最多人看)
- 成本 ↓
  - 機器數量
  - 工時

**工程師角度：**

- 套件版本(node, react, nextjs) ↑
  - 每隔一段時間固定升級(會遇到測試問題,怎麼確保之前功能正常)
    - 升級前後 testing 結果？
- 測試花費 ↓
  - 自動化測試流程
  - 測試範圍(什麼需要測試/什麼不需要測試)
    - unit test
    - e2e
- 維護成本 ↓
  - 共用元件庫避免重複做一樣的事(表格,圖表)
  - 推版流程
    - 測試
    - 多個專案共用問題
      - monorepo
    - 推版(beta, stage, prod)
      - 能切子網域來給不同 branch 測試嗎？(beta.cnyes.cool\/release\/xxx)
        - 機器空間問題(新的 sprint 把舊的空間都釋放)
    - Lighthouse 評分
    - Github Runner 升級
    - Slack Message
  - 維運
- 文件
  - 架構文件
  - 程式碼(商業邏輯註解, jsdoc, 票號)
- 架構
  - 語系
  - API/Utils/圖片: 資料夾區分
- 開發舒適 ↑
  - ESLint
  - TypeScript
  - Prettier(排版一致)
  - 推版問題
    - 能同時推不同 branch 給 pm 測嗎？
      - 整理 branch 一起推有些麻煩，測完的 branch 再合併到 prod

**舊新聞專案有什麼問題**

- 語法是 Class, 跟不上潮流 → function component
- 不是 TypeScript, 跟不上潮流 →TypeScript
- 廣告載入速度問題 → DFP 底層重寫?
- 資料流混亂，Model 層和 View 層混在一起(原本設計感覺是 Container 負責 Model, Detail 層只負責 View)，現在 View 也負責資料處理
- 把所有 API 拿到的資料直接塞到 redux 中，資料只能用在一個地方
- 內頁沒有拆分邏輯，全部邏輯都寫在 NewsDetail 中(1700 行)
  - state 改變會影響到很多不需要 rerender 的東西

**新聞專案**

- Tech Stacks
  - Monorepo (nx)
    - News
    - CommonLibrary
  - SSR (Nextjs 13)
  - React 18
  - tailwind
  - GA4
    - GaEvent Class 沿用
  - API
    - React-Query
    - axios
- AWD/RWD
  - 偏好 RWD, 在第一金專案使用 tailwind.css,在處理 RWD 上有不錯的開發體驗
    - 以手機版為主, 桌機版只要另外加上類似 lg:p-4 就不會影響到手機版樣式
- CSS Framework
  - Sass which allows you to import `.css` and `.scss` files.
  * PostCSS libraries like [Tailwind CSS](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss).
  - tailwind
    - 優點：語法熟悉開發快速
    - 缺點：偽元素維護麻煩、className 長、condiction css 稍微麻煩、不知道會不會一下就過氣(?)
  * CSS-in-JS libraries such as [styled-jsx](https://github.com/vercel/styled-jsx), [styled-components](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components)

* 架構
  - News
    - assets
      - fonts
      - icons
      - images
    - context
    - data(設定檔) - xxx.json
    - features(不同頁面可能會共用的功能)
    - layouts
    - components
    - utils
    - hooks
      - 我覺得 hooks 統一放在 hooks 資料夾沒有比較好，通常不會重複使用。放在元件下？需要共用時在抽到 hooks 資料夾？
    - public
    - routes
    - defines
  - CommonLibrary
    - Header - 桌機版/手機版
    - Footer
    - Section 標題
    - ReadMore
    - Button
    - ScrollTop
    - Slider 滾動元件
    - 意見回饋/我要投稿
    - 留言元件
    - LoadingSkleten
    - List 列表
      - 新聞列表
      - 推薦閱讀
      - 相關新聞
      - 人氣排行/議題新聞
    - Card
      - 鉅亨新世界
    - Modal 彈出視窗
      - 圖片預覽
    - Shares
      - FB/Line/Links
    - ADUnit 廣告
      - 預設高度(CLS)
      - 載入動畫
      - 桌機手機版問題
      - 底層載入需要重寫？
    - utils
      - quotes
        - 小數點位數
        - %
        - 單位
        - 顏色(紅/綠)
      - date

## Reference

- [大型前端專案的架構. 現在很多前端工程師的職缺都要求開發過大型應用(Large-Scale… | by Ben Z.W. Jian | Medium](https://medium.com/@benzwjian/%E5%A4%A7%E5%9E%8B%E5%89%8D%E7%AB%AF%E5%B0%88%E6%A1%88%E7%9A%84%E6%9E%B6%E6%A7%8B-cc235aacced0)
- 目錄結構
  - [Folder Structure for Modern Web Applications](https://dev.to/noruwa/folder-structure-for-modern-web-applications-4d11)
