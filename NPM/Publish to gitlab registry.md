要怎麼把公司UI共用元件庫打包發佈讓所有專案能夠使用又不希望上傳到公開的元件庫？
一般下載套件如使用yarn作為套件管理工具都是到公開元件`https://registry.yarnpkg.com`做下載，但公司的東西不希望放到公開的地方，希望能夠放到自己的機器上。目前公司是自己架Gitlab，所有程式碼都推到公司機器上。

公用套件庫要怎麼也一起推到Gitlab，並可以從Gitlab做下載呢？
Gitlab有提供Packages & Registries(圖1)。配合CICD每次打tag時能夠一起發佈到這個地方(圖2)

|圖1|圖2|
|---|---|
|![Packages & Registries](./registry.png)| ![Packages & Registries](./registry1.png)|

## 流程
1. 開發元件並透過[Storybook](https://storybook.js.org/)UI開發工具預覽
2. 透過[Webpack](https://webpack.js.org/), [Rollup](https://rollupjs.org/) 等工具編譯打包
3. 建立CICD, 每次打tag時自動發佈到Gitlab Registry
4. 安裝至使用的專案

## 1. 開發元件
透過[Storybook](https://storybook.js.org/)可以方便預覽每個元件的樣式與有什麼參數可以使用。例如按鈕元件，可以透過下方看出有什麼參數可以使用，與觸發時的樣式預覽。

![Storybook](./storybook.png)

## 2.  編譯打包元件
 




* [Publish packages with Yarn | GitLab](https://docs.gitlab.com/ee/user/packages/yarn_repository/)
* [(10) GitLab NPM Registry Demo - YouTube](https://www.youtube.com/watch?v=yvLxtkvsFDA)
