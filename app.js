const express = require("express")
const app = express()

app.use(express.json());

app.set("view engine", "ejs")

app.get("/",(req,res)=>{
    res.render("home",{title: "ejs", page: "home"})
})
app.get("/about",(req,res)=>{
    res.render("about",{title: "ejs", page: "about"})
})
app.get("/services",(req,res)=>{
    res.render("services",{title: "ejs", page: "services"})
})
app.get("/contact",(req,res)=>{
    res.render("contact",{title: "ejs", page: "contact"})
})

app.listen(4444, ()=>{
    console.log("Server is running on http://localhost:4444")
})