const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", (req,res)=>{
    res.render("home")
})

app.listen(4444, ()=>{
    console.log("Server is running on http://localhost:4444")
})