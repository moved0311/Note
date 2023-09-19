## React deploy on github page

1. `npm install gh-pages --save-dev`
2. 在packeage.json中加入

```
"homepage": "<https://moved0311.github.io/><repos name>"

"srcipts":{
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}

```

1. 設定好github，把東西上傳上去
2. `npm run deploy`

- [How to deploy React App to GitHub Pages](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)