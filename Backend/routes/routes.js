const express = require("express")
const { getAllTasks, addTasks, editTasks, deleteTasks, updatedTask } = require("../Controller/TasksData")

const TaskRouter = express.Router()

TaskRouter.get("/tasks", getAllTasks)
TaskRouter.post("/add", addTasks)
TaskRouter.patch("/edit/:id", editTasks)
TaskRouter.delete("/delete/:id", deleteTasks)
TaskRouter.patch("/update/:id", updatedTask)

module.exports = {
    TaskRouter
}