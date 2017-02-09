"use strict";
var  express = require("express"),
    server = express(),
    path = require("path"),    
    bodyParser = require("body-parser"),
    cors = require("cors"),
    PORT = process.env.PORT || 5555;

server.use("/Public", express.static(path.join(__dirname, "Public")));
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.get("/", function(req, res){
    res.sendFile(__dirname+"/Public/index.html");
});

server.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`);
})
