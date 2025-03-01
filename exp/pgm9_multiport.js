const app = require("express")()

app.get("/user1",(req,res)=>{
    console.log("User1 port no: 1234 successfully running")
    res.send("User1 port no: 1234 successfully running")
}).listen(1234)
console.log("port listening at 1234")

app.get("/user2",(req,res)=>{
    console.log("User2 port no: 1235 successfully running")
    res.send("User2 port no: 1235 successfully running")
}).listen(1235)
console.log("port listening at 1235")

app.get("/user3",(req,res)=>{
    console.log("User3 port no: 1236 successfully running")
    res.send("User3 port no: 1236 successfully running")
}).listen(1236)
console.log("port listening at 1236")