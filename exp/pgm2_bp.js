// Form submission using post method (body parser) 

var app = require("express")()
var bp = require("body-parser")

var urlencoder = bp.urlencoded({extended:false})

app.post("/postfun",urlencoder,(req,res)=>{
    var user = req.body.un
    var pass = req.body.pw
    res.send("user: "+ user+" pwd: "+pass)
    console.log("user: "+ user+" pwd: "+pass)
    res.end()
}).listen(1234)



console.log("port listening at 1234")
