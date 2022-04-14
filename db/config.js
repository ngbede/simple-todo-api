const {Sequelize} = require("sequelize")
require("dotenv/config") // or require("dotenv").config()

const sequelize = new Sequelize(
    process.env.database, process.env.username, process.env.dbPassword,  
    {dialect: "mysql", host: "localhost"}
)

module.exports = sequelize