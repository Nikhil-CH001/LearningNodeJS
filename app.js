const express = require("express")
const db = require("./database/config")
const app = express()
const bcrypt = require("bcrypt")

app.use(express.urlencoded({ extended: true }));
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

app.get("/login", (req,res)=>{
    res.render("authentication/login")
})

app.get("/register", (req,res)=>{
    res.render("authentication/register")
})

app.post("/register", async (req, res) => {
    const { username, email, password, confirm_password } = req.body;

    await db.users.create({
        username: username,
        email: email,
        password: bcrypt.hashSync(password, 10),
    });

    res.redirect("/");
});


app.listen(4444, ()=>{
    console.log("Server is running on http://localhost:4444")
})