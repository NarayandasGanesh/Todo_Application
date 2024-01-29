const TaskModel = require("../Models/task.model")

// get all the tasks

const getAllTasks = async (req,res) => {
    try {
        const TasksData = await TaskModel.find()
        if(TasksData.length === 0){
            res.send({message: "Create A New Task"})
        }else{
        res.send(TasksData)
        }
    } catch (error) {
        console.log(error)
        res.send({error: error.message})
    }
}

const addTasks = async(req,res) => {
    let data = req.body
    console.log(data)
    try {
        const model = new TaskModel(data)
        await model.save()
        console.log(model)
        res.status(200).send({message: "Task Added Successfully"})
    } catch (error) {
        console.log(error)
        res.send({message : error.message})

    }
}

const editTasks = async (req, res) => {
    const EditTaskID = req.params.id;
    const payload = req.body;
    console.log(EditTaskID,payload)
    try {
      await TaskModel.findByIdAndUpdate({ _id: EditTaskID }, payload);
      res.send(`Upadated the ${EditTaskID} sucessfully `);
    } catch (error) {
      console.log(error);
      res.send({ err: "Something went wrong" });
    }
  };

  const deleteTasks = async (req, res) => {
    const DeleteUser = req.params.id;
    try {
      let model = await TaskModel.findByIdAndDelete(DeleteUser);
      console.log(model);
      console.log(DeleteUser);
      res.status(200).send({ Message: "Task Is Removed SucessFully" });
    } catch (error) {
      console.log(error);
      res.status(404).send({ Message: "Failed" });
    }
  };

  const updatedTask =  async (req, res) => {
    const taskId = req.params.taskId;
    const { completed } = req.body;
  
    try {
      const updatedTask = await TaskModel.findByIdAndUpdate(
        taskId,
        { completed },
        { new: true }
      );
  
      if (!updatedTask) {
        return res.status(404).json({ error: 'Task not found' });
      }
  
      res.json(updatedTask);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports = {
    getAllTasks,
    addTasks,
    editTasks,
    deleteTasks,
    updatedTask
}