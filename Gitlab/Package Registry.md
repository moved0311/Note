## 開啟權限
1. Open up your project’s **_Settings > General > Visibility, project features, permissions._**
2. Enable the **packages feature** and click on Save Changes for the changes to take effect.

## gitlab.yml
```
image: node:12.20.0
stages:
  - deploy
deploy:
  stage: deploy
  script:
    - yarn publish
```

## .yarnrc.yml
```
npmScopes:
  cnyes:
    npmPublishRegistry: "${CI_API_V4_URL}/projects/${CI_PROJECT_ID}/packages/npm/"
    npmAlwaysAuth: true
    npmAuthToken: "${NPM_AUTH_TOKEN}"
```

## package.json
```json
  "repository": {
    "type": "git",
    "url": "https://gitlab.cnyes.cool/share/fe-common-library.git"
  },
  "publishConfig": {
    "@cnyes:registry": "https://gitlab.cnyes.cool/api/v4/projects/186/packages/npm/"
  },
```

## .npmrc




需要在Settings > Access Token建立NPM_AUTH_TOKEN