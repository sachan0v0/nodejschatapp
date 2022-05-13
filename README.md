#Nodejs realtime chat app
====


## Description
This is web application using nodejs・nodemon・express・socket.io
## Demo
<img src="https://github.com/sachan0v0/nodejschatapp/blob/main/node.png" alt="img" title="sample">
## VS. 

## Requirement
nodejs express socket.io
## Usage
npm run
open your browser http://localhost:3000/
## Install


```bash
$ # dockerに対してディスレプレイの使用を許可する
$ xhost +local:docker
$ # X11のソケットファイルの環境変数
$ XSOCK=/tmp/.X11-unix
$ # Xサーバと接続するための認証情報(xauthファイル)のパス
$ XAUTH=/tmp/.docker.xauth
$ # xauthファイルを作成する
$ xauth nlist $DISPLAY | sed -e 's/^..../ffff/' | xauth -f $XAUTH nmerge -
$ npm install express
$ npm install socket.io
$ npm install -g nodemon
```

## Contribution

## Licence

[MIT]

## Author

[sachan0v0](https://github.com/sachan0v0)
