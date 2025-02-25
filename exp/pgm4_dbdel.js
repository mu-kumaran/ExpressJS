var app = require("express")()
var bp = require("body-parser")
var urlencoder = bp.urlencoded({extended:false})

//mongo db connection

var {MongoClient} = require("mongodb")
var client = new MongoClient("mongodb://127.0.0.1:27017/")
client.connect()
console.log("connection success")

//Delete operation

app.post("/delfun",urlencoder,(req,res)=>{
    var unam = req.body.un;
    var pass = req.body.pw;

    var inputJson = {
        user: unam,
        pwd: pass
    }
    try{
        var dataset = client.db("manoj").collection("emp").deleteOne(inputJson)

        dataset.then((result)=>{
            console.log(result)
            if(result.deletedCount>0){
                res.send("record deleted successfully")
            }
            else{
                res.send("Record not found")
            }
    
        })
       
    }
    catch{
        console.log("error")
        client.close()
    }

    
}).listen(1234)
console.log("port listening at 1234")