Doc: https://docs.gitlab.com/ee/user/packages/npm_registry/

## 開啟權限
1. Open up your project’s **_Settings > General > Visibility, project features, permissions._**
2. Enable the **packages feature** and click on Save Changes for the changes to take effect.

## gitlab.yml
```
# node8沒辦法推,這裡改用node12
# doc: https://docs.gitlab.com/ee/user/packages/npm_registry/
deploy:
  image: node:12.20.0
  stage: deploy_to_gitlab_registry
  script:
    - GITLAB_AUTH_TOKEN=$NPM_AUTH_TOKEN npm publish
```

## .npmrc

需要在Settings > Access Token建立NPM_TOKEN
```
@cnyes:registry=https://gitlab.cnyes.cool/api/v4/projects/186/packages/npm/
//gitlab.cnyes.cool/api/v4/projects/186/packages/npm/:_authToken=$NPM_TOKEN
```

## package.json
```json
  "name": "@cnyes/fe-common-library",
  "version": "1.1.221",
  "repository": {
    "type": "git",
    "url": "https://gitlab.cnyes.cool/share/fe-common-library.git"
  },
  "publishConfig": {
    "@cnyes:registry": "https://gitlab.cnyes.cool/api/v4/projects/186/packages/npm/"
  },
    "files": [
    "dest/",
    "static/",
    ".npmrc"
  ]
```

