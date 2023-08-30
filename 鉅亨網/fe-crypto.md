### Update React to 16.8.6

```bash
yarn add react@16.8.6
yarn add react-dom@16.8.6
```

- [Invalid Hook Call Warning](https://reactjs.org/warnings/invalid-hook-call-warning.html)
    
    1. You might have mismatching versions of React and React DOM.
    
    ```bash
    npm ls react
    npm ls react-dom
    ```
    
    1. You might be breaking the Rules of Hooks.
    2. You might have more than one copy of React in the same app.

### checkout outdated

```bash
yarn outdated
```

- upgrade dependency
    
    ```bash
    yarn upgrade [package@version]
    
    yarn upgrade --save
    ```
    

### upgrade next@7.0.2, next-routes@1.4.2

- node-sass rebuild `npm rebuild node-sass`
    
- requirements
    
|Next|Node|
|---|---|
|12|12.22.0|
|10|10.13.0|
|9.5.5|10.13.0|
|8|8|
    

### Errors

- Error: Plugin/Preset files are not allowed to export objects, only functions.
- TypeError: callSite.getFileName is not a function (depd)
    - [callSite.getFileName is not a function](https://github.com/callahanrts/slack-chat/issues/37) upgrade node to 14

### upgrade babel

[https://github.com/babel/babel-upgrade](https://github.com/babel/babel-upgrade)

```bash
yarn global add babel-upgrade
babel-upgrade --write

# 沒有加write會先印出差異
```

- @babel/preset-env
- @babel/preset-react
- @babel/plugin-proposal-class-properties