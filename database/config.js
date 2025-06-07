const {Sequelize, DataTypes} = require("sequelize")
const dotenv = require("dotenv")
const makeUserTable = require("../models/userModel")
const makeBlogTable = require("../models/blogModel")
const makeProductTable = require("../models/productModel")
dotenv.config()

const sequelize = new Sequelize({
    host: process.env.db_host,
    username: process.env.db_username,
    password: process.env.db_password,
    port: process.env.db_port,
    database: process.env.db_name,
    dialect: "mysql"    
})

// sequelize.authenticate().then((
//     console.log("Database connected")
// )).catch((
//     console.log("Database failed to connect")
// ))
const db = {}
db.users = require("../models/userModel")(sequelize,DataTypes)
db.products = require("../models/productModel")(sequelize,DataTypes)
db.blogs = require("../models/blogModel")(sequelize,DataTypes)

async function testConnection(){
    try{
        await sequelize.authenticate()
        console.log("Database connected")
        
        await sequelize.sync({alter:true})
        console.log("Models synced to database")
    } catch(error){
        console.error("Database failed to connect", error.message)
    }
}
testConnection()

module.exports = db