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
    var stud_name = req.query["sname"]
    var input = { 
        rollno: parseInt(rl),
        sname: stud_name
    }
    console.log(input)
    var dataset = client.db("manoj").collection("myStudent").find(input).toArray()
    try{
        dataset.then((result)=>{
            console.log(result)
            console.log(result.length)
            if (result.length>0)
                res.send(result)
            else
                res.send("Record not found")
        })
    }
    catch{
        console.log("Error")
        client.close()
    }
    
}).listen(1234)
console.log("port listening at 1234....")