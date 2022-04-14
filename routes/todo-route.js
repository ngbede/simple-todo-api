const express = require("express")
const router = express.Router()
const Todo = require("../models/todo")


router.get("/", (req, res) => {
    res.status(200).json({
        message: "This is a very simple TODO API, all incoming data is stored in mySQL",
        statusCode: 200
    })
})

router.get("/todo", (req, res) => {
    Todo.findAll()
    .then(todo => {
        let code = 200
        let allTodos = []
        if (todo.length === 0){
            return res.status(code).json({
                message: "No Todo item exists in DB",
                statusCode: code,
            })
        } else {
            msg = "SUCCESS"
            Todo.findAll()
            .then(result => {
                result.forEach(item => {
                    allTodos.push(item.dataValues)
                })
             return res.status(code).json({
                message: msg,
                statusCode: code,
                todos: allTodos
            })
            }).catch(err => {
                console.log(err);
            })
        }
      
    }).catch(err => {
        console.log(err);
    })
})

router.get("/todo/:id", (req, res) => {
    const id = parseInt(req.params.id)
    Todo.findByPk(id).then(result => {
        if (result){
            console.log(result.dataValues);
            return res.status(200).json({
                todo: result.dataValues,
                statusCode: 200
            })
        } else{
            return res.status(404).json({
                message: `No Todo item with id ${id} exist's on the DB`,
                statusCode: 404
            })
        }
    }).catch(err => {
        console.log(err);
    })
})

router.post("/todo", (req, res) => {
    const newTitle = req.body.title
    const newChecked = req.body.checked
    Todo.create({
        title: newTitle,
        checked: newChecked
    }).then((result => {
        res.status(201).json({
            message: `Todo item with id ${result.dataValues.id} has been saved to DB`,
            statusCode: 201
        })
    })).catch(err => {
        console.log(err);
    })
})

router.patch("/todo/:id", async (req, res) => {
    const id = parseInt(req.params.id)
    const payload = req.body
    const todo = await Todo.findByPk(id)
    if(todo){
    Todo.update({
        title: payload.title ?? todo.title,
        checked: payload.checked ?? todo.checked
        }, {
        where: {
            id: id
        }
    }).then(result => {
        return res.status(200).json({
            message: `Todo item with id ${id} successfully updated`,
            statusCode: 200
        })
    })
    } else{
        return res.status(404).json({
            message: `Todo item with id ${id} doesn't exist on DB`,
            statusCode: 404
        })
    }
})

router.delete("/todo/:id", (req, res) => {
    const id = parseInt(req.params.id)
    Todo.destroy({
        where: {
            id: id
        }
    }).then(result => {
        if (result){
            return res.status(200).json({
                message: `Todo item with id ${id} has been deleted`,
                statusCode: 200
            })
        } else{
            return res.status(404).json({
                message: `No Todo item with id ${id} exist's on the DB`,
                statusCode: 404
            })
        }
    }).catch(err => {
        console.log(err);
    })
})
module.exports = router