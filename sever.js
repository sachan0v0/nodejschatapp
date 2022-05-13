const express = require("express");
const app = express();
const http = require("http");
const sever = http.createServer(app);
const io = require("socket.io")(sever);
const PORT = 3000;

app.get("/", (req, res) => {/*トップページ指定*/
    res.sendFile(__dirname + "/index.html");
});

io.on("connection",(socket) => {/*io.onは受け取り*/
    console.log("User Conecting");
    socket.on("chat message", (msg) => {
        //console.log("message:" + msg);
        io.emit("chat message", msg);
    });
});

sever.listen(PORT, () => {
    console.log("listening on 3000")
});