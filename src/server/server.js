/**
 * Created by aobin on 10/16/2016.
 */
import express from "express";
import {Server} from "http";
let app = express();

let http = Server(app);

let rootPath = require("path").normalize(__dirname+"../../");
app.set("views",__dirname+"/views");
app.set("view engine","ejs");

app.use(express.static(rootPath+"/public"));

app.get("/",(req,res)=>{
    //res.send("hello world")
    res.render("index",{student:{name:"aobin",age:10}});
})

//启动，babel-node src/server/server.js
//需要预先安装 npm install -g babel-cli 才能执行， localhost:3000
//安装socket.io
http.listen(3000,()=>{
    console.log("listen to 3000 port");

})

