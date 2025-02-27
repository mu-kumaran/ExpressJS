// Find - dynamic
var exp = require("express")
var app = exp()

//mongodb connection
 var {MongoClient} = require("mongodb")
 var client = new MongoClient("mongodb://127.0.0.1:27017/")
client.connect()
console.log("connection successful")

// find operation

app.get("/findstud",(req,res)=>{
    var s1 = req.query["roll"]
    var s2 = req.query["sname"]
    var s3 = req.query["mark"]
    console.log(s1)
    console.log(s2)
    console.log(s3)
    console.log(s1.length)
    console.log(s2.length)
    console.log(s3.length)
    
    if(s1.length>0){
        var input = {
            rollno:parseInt(s1)
        }
    }
    else if(s2.length>0){
        var input = {
            sname:s2
        }
    }
    else{
        var input = {
            mark:parseInt(s3)
        }
    }
    console.log(input)
    var dataset = client.db("manoj").collection("student").find(input).toArray()
    try{
        dataset.then((result)=>{
            console.log(result)
            console.log(result.length)
            if (result.length>0){
                res.send(result)
            }
            else{
                res.send("Record not found")
            }
        })
    }
    catch{
        console.log("Error")
        client.close()
    }
    
}).listen(1234)
console.log("port listening at 1234....")