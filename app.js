const bodyParser = require('body-parser')
const express = require("express");
const sequelize = require("./db/config");
const app = express()
const todoRoute = require("./routes/todo-route")
require("dotenv/config")

app.use(bodyParser.json())

// Disable CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
    next()
})

app.use("/todo-api", todoRoute)

// init DB
sequelize.sync().then(res => {
    console.log("DB initialized")
}).catch(err => {
    console.log(err);
})

app.listen(3000, () => {
    console.log("Running on port 3000");
})