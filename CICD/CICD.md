## Gitlab Doc
* [GitLab Documentation](https://docs.gitlab.com/)
## 基本概念
* [為你自己學 GitLab CI/CD - YouTube](https://www.youtube.com/playlist?list=PLBd8JGCAcUAEwyH2kT1wW2BUmcSPQzGcu)
  * [為你自己學 GitLab CI/CD Day 08 - 環境變數 - YouTube](https://www.youtube.com/watch?v=7MLKzgCJAE4)
    * workflow(可以做一些if...else幫所有JOB加判斷，例如是push, pr時才觸發等)
    * 變數作用域可以在JOB中,所有JOB或是綁在Gitlab環境變數上
  * [為你自己學 GitLab CI/CD Day 11 - 在本機的 GitLab Runner - YouTube](https://www.youtube.com/watch?v=wRXBztn6OkE)
    * 用自己本地的shell註冊為gitlab runner
    * gitlab.yml中的tag可以指定要使用哪一個runner，預設是使用gitlab提供的
  * [(13) 為你自己學 GitLab CI/CD Day 17 - 專案演練 part 4 自動遞增 Image 版號 - YouTube](https://www.youtube.com/watch?v=jG3Ne543Ua0)
    ```
    before_script:
    - export IMAGE_VERSION=$(cat package.json | jq -r .version)
    ```

## Nx
* [Setting up GitLab | Nx](https://nx.dev/recipes/ci/monorepo-ci-gitlab)

## [Gitlab Runner](https://docs.gitlab.com/runner/install/osx.html)
* Install
  ```
  sudo curl --output /usr/local/bin/gitlab-runner "https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-darwin-amd64"
  sudo chmod +x /usr/local/bin/gitlab-runner
  gitlab-runner install
  gitlab-runner register
  gitlab-runner start
  ```
* 設定檔存在`~/.gitlab-runner/config.toml`