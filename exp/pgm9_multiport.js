const app = require("express")()

app.get("/user1",(req,res)=>{
    console.log("User1 port no: 1234 successfully running")
    res.set('Content-Type', 'text/html'); 
    res.send(Buffer.from("<h2>User1 port no: 1234 successfully running<h2>"))
  
}).listen(1234)
console.log("port listening at 1234")

app.get("/user2",(req,res)=>{
    console.log("User2 port no: 1235 successfully running")
    res.send("<h2>User2 port no: 1235 successfully running<h2>")
}).listen(1235)
console.log("port listening at 1235")

app.get("/user3",(req,res)=>{
    console.log("User3 port no: 1236 successfully running")
    res.send("<h2>User3 port no: 1236 successfully running<h2>")
}).listen(1236)
console.log("port listening at 1236")