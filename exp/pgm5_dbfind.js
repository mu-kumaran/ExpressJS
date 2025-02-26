// Find - dynamic
var exp = require("express")
var app = exp()

//mongodb connection
 var {MongoClient} = require("mongodb")
 var client = new MongoClient("mongodb://127.0.0.1:27017/")
client.connect()
console.log("connection successful")

// find operation

app.get("/findfun",(req,res)=>{
    var rl = req.query["roll"]
    var input = { 
        rollno: parseInt(rl)
    }
    console.log(input)
    var dataset = client.db("manoj").collection("myStudent").find(input).toArray()

    dataset.then((result)=>{
        console.log(result)
        res.send(result)
    })
}).listen(1234)
console.log("port listening at 1234....")