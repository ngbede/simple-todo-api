// The TODO object model

const Sequelize = require("sequelize")
const sequelize = require("../db/config")

const Todo = sequelize.define("Todo", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    checked: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

module.exports = Todo