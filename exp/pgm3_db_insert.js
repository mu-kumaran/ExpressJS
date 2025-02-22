// Insert operation

var app = require("express")()
var bp = require("body-parser")
var urlencoder = bp.urlencoded({extended:false})

// creating mongodb connection
var {MongoClient} = require("mongodb")
var client = new MongoClient("mongodb://127.0.0.1:27017/")
client.connect()
console.log("connection success")

app.post("/insertfun",urlencoder,(req,res)=>{
    var un = req.body.un
    var pass = req.body.pw
    var userjson = {
        user: un,
        pwd: pass
    }
    try{
        var dataset = client.db("manoj").collection("emp").insertOne(userjson)
        dataset.then((result)=>{
        console.log(result)
        res.send("Inserted successfully"+result.acknowledged)
        }) 
    }
    catch{
        console.log("error")
        client.close()
    }
    
}).listen(1234)