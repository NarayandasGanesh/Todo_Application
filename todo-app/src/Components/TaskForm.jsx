import React, { useState } from "react";
import axios from "axios";
import TasksLists from "./TasksLists";
import "../Styles/style.css";

const TaskForm = ({ onTaskCreated }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [end_date, setEndDate] = useState("");
  const [renderedTask, setRenderedTask] = useState([]);

  const getRenderedTasks = async () => {
    try {
      const response = await axios.get(
        "https://cute-rose-camel-vest.cyclic.app/tasks"
      );
      console.log(response.data);
      setRenderedTask(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://cute-rose-camel-vest.cyclic.app/add",
        {
          task,
          description,
        }
      );
      if (onTaskCreated) {
        onTaskCreated(response.data);
      }
      setTask("");
      setDescription("");
      getRenderedTasks();
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <>
      <div>
        <h1>Todo App</h1>
      </div>
      <div className="main-cont">
        <div className="add-cont">
          <label>
            Task Title:
            <input
              type="text"
              placeholder="Create Your Todo"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </label>
          <label>
            Task Description:
            <input
              type="text"
              placeholder="Enter Your Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              value={end_date}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
          <button onClick={handleCreateTask}>Add Todo</button>
        </div>
        <div>
          <TasksLists />
        </div>
      </div>
    </>
  );
};

export default TaskForm;
