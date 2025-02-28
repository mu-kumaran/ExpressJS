//Update - dynamic

var app = require("express")()

//MongoDB connection

var {MongoClient} = require("mongodb")
var client = new MongoClient("mongodb://127.0.0.1:27017/")
client.connect()
console.log("Connection success")

//update operation

app.get("/updatefun",(req,res)=>{
    var rno = req.query['roll']
    var nmark = req.query['newmark']
    var inputJson = {
        rollno: parseInt(rno)
    }
    var newdata = {
        mark: parseInt(nmark)
    }
    try{
        var dataset = client.db("manoj").collection("student").updateOne(inputJson,{$set:newdata})
        dataset.then((result)=>{
            console.log(result)
            if(result.matchedCount>0 && result.modifiedCount>0){
                res.send("Record updated")
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
console.log("port listening at 1234")
