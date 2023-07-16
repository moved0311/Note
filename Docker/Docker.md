# Docker
* [Docker風潮席捲IT世界 | iThome](https://www.ithome.com.tw/news/91839)
* [Docker社群達人教你快速踏出Docker的第一步 | iThome](https://www.ithome.com.tw/news/91848)



## Basic
> Docker Image is a package or a template, it is used to create one or more containers.
Container are running instances of images


## Get started
### Part1 : Orientation and setup
* container啟動是透過跑image，Image是一個可執行的package包含所有需要的runtime, libraries, envirionment variables, configuration files
* container是image的實例

__Test Docker__
```bash
## Docker版本
$ docker --version
Docker version 18.03.0-ce, build 0520e24302

## Docker詳細資訊
$ docker info
Containers: 2
 Running: 0
 Paused: 0
 Stopped: 2
Images: 1
Server Version: 18.05.0-ce
...

## 啟動images examples
$ docker run hello-world
## 沒有hello-world image會自動去docker hub下載

## 查看目前的images
$ docker images ls

## 查看所有container
$ docker container ls --all
```

## Part2 : Containers
```bash
## 建立一個新的資料夾HelloWorld
mkdir HelloWorld

## 切換到HelloWorld資料夾
cd HelloWorld

## 創一個Dockerfile的檔案
vim Dockerfile
## 輸入 :set paste
## 按 i 
## 下面內容複製好，右鍵貼上
## :wq 儲存離開

## 創立一個requirements.txt檔案
vim requirements.txt
## Dockerfile第四個部分會安裝requirements.txt內需要用到的套件

## 建立一個app.py檔案
vim app.py 
```

__`Dockerfile`__
```bash
## Use an official Python runtime as a parent image
FROM python:2.7-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["python", "app.py"]
```
__`requirements.txt`__
```
Flask
Redis
```
__`app.py`__
```py
from flask import Flask
from redis import Redis, RedisError
import os
import socket

# Connect to Redis
redis = Redis(host="redis", db=0, socket_connect_timeout=2, socket_timeout=2)

app = Flask(__name__)

@app.route("/")
def hello():
    try:
        visits = redis.incr("counter")
    except RedisError:
        visits = "<i>cannot connect to Redis, counter disabled</i>"

    html = "<h3>Hello {name}!</h3>" \
           "<b>Hostname:</b> {hostname}<br/>" \
           "<b>Visits:</b> {visits}"
    return html.format(name=os.getenv("NAME", "world"), hostname=socket.gethostname(), visits=visits)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
```

__Build the app__
```bash
$ ls 
Dockerfile		app.py			requirements.txt

$ docker build -t friendlyhello .
## 把目前資料夾(.)做build,將image取名為friendlyhello 

$ docker image ls
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
friendlyhello       latest              fca7865a2871        38 minutes ago      132MB
```

__Run the app__
```bash
docker run -p 4000:80 friendlyhello

## 如果是使用Windows，在瀏覽器不能用localhost:4000
## 要用ip:4000  (192.168.99.100:4000)

## 查Docker ip
$ docker-machine ip 
192.168.99.100
```



# Example

```
$ docker run -dp 80:80 docker/getting-started
# -d                       detached mode(in the background)
# -p 80:80                 port(host):port(container)
# docker/getting-started   the image to use
```

在瀏覽器上輸入`localhost`可以看到文件
下載[todo](http://localhost/assets/app.zip)範例，解壓縮後會有app,進入app會看到`package.json`,`spec/`,`src/`,`yarn.lock`在同一層加`Dockerfile`

## Dockerfile
```dockerfile
FROM node:12-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
```

## build
```bash
docker build -t getting-started .
# -t  flag tags our images, 
#     human-readable name like getting-started
# .   look current directory for the Dockfile
```

## start app container
```bash
docker run -dp 3000:3000 getting-started
```
open browser and type `localhost:3000`

## check container
```bash
docker container ls 
# CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES  
# 63449effedfb getting-started "docker-entrypoint.s…" 2 minutes ago Up 2 minutes 0.0.0.0:3000->3000/tcp epic_proskuriakova
```

## stop container
```bash
docker container stop <Container NAME or ID>
```

## check containers/images
```
docker ps
docker images 
```

## Delete containers/images
```docker
docker rm <Container ID/Name>
docker rmi <Image ID/Name> 
# -f
```

## Run container
```docker
docker run <image-name>
# -d(detach)            run container in the background
# docker attach <ID>    attach back to the running container
# --name webapp         name container
```

## Change default storage location
* https://evodify.com/change-docker-storage-location/


## Docker Images
```sh
> docker images
REPOSITORY         TAG           IMAGE ID       CREATED          SIZE
fe-cnyes/fe-news   main          f449320d77c2   14 minutes ago   1.38GB
fe-cnyes/fe-news   sha-108b280   f449320d77c2   14 minutes ago   1.38GB

> docker run fe-cnyes/fe-new:main

```

## Delete none name images 
```sh
 docker images -a | grep none | awk '{ print $3; }' | xargs docker rmi -f
```


## Mac Images locations
```
~/Library/Containers/com.docker.docker/Data/vms/0/data

> du -h
8.9G	.
```