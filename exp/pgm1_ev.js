var ev = require("email-validator");
var exp = require("express")
var app = exp()

app.get("/myfun",(req,res)=>{
    var email = req.query['em']
    var pass = req.query['pwd']

    if(ev.validate(email)){
        res.send("Valid email: "+email)
        console.log("Email: "+email)
    }
    else{
        res.send("Invalid email")
        console.log("Invalid email")
    }

}).listen(1234)
console.log("Port listening at 1234")

