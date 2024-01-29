import React, { useEffect, useState } from 'react'
import axios from "axios"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "../Styles/style.css"
import Checkbox from '@mui/material/Checkbox';



const TasksLists = () => {
    const [tasks, setTasks] = useState([])
    const [updateItemText, setUpdateItemText] = useState('');
    const [isUpdating, setIsUpdating] = useState('')

    const getTasks = async() =>{
        try {
            const response = await axios.get('https://cute-rose-camel-vest.cyclic.app/tasks');
            console.log(response.data)
            setTasks(response.data);
          } catch (error) {
            console.error('Error fetching tasks:', error);
          }
    }
    const handleDelete = async (id) => {
      try {
        let res = await axios.delete(`https://cute-rose-camel-vest.cyclic.app/delete/${id}`);
        console.log(res.data);
        getTasks();
      } catch (error) {
        console.log(error);
      }
    };
  
    const formatDate = (date) => {
      const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
      return new Date(date).toLocaleDateString('en-GB', options);
    };
    const handleToggleComplete = async (id, completed) => {
      try {
        await axios.patch(`https://cute-rose-camel-vest.cyclic.app/update/${id}`, {
          completed: !completed,
        });
        getTasks();
      } catch (error) {
        console.error('Error updating task:', error);
      }
    };
    const updateItem = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.put(`https://cute-rose-camel-vest.cyclic.app/edit/${isUpdating}`, { item: updateItemText });
        console.log(res.data);
        const updatedItemIndex = tasks.findIndex((item) => item._id === isUpdating);
        const updatedItem = tasks[updatedItemIndex].item = updateItemText;
        setUpdateItemText('');
        setIsUpdating('');
      } catch (err) {
        console.log(err);
      }
    };
    
    useEffect(() =>{
        getTasks()
    },[])
    const renderUpdateForm = () => (
      <form className="update-form" onSubmit={(e) => updateItem(e)}>
        <input
          className="update-new-input"
          type="text"
          placeholder="New Item"
          onChange={(e) => {
            setUpdateItemText(e.target.value);
          }}
          value={updateItemText}
        />
        <button className="update-new-btn" type="submit">
          Update
        </button>
      </form>
    );
  return (
    <div className='task-container'>
        
        <>
        {tasks.map((task) => (
          <div className='list-container' key={task.id} >
            {isUpdating === task._id ? (
              renderUpdateForm()
            ) : (
            <>
             <Checkbox
            checked={task.completed}
            onChange={() => handleToggleComplete(task._id, task.completed)}
          />
            {task.task} - {task.completed ? 'Completed' : 'Incomplete'}
            {/* <p>{task.description}</p> */}
            <p>{formatDate(task.end_date)}</p>
            {/* <input type="checkbox" name="" id="" value={task.completed}/> */}
            {/* <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(task._id, task.completed)}
                /> */}
            <DeleteIcon onClick={() => handleDelete(task._id)}/>
            <EditIcon   onClick={() => setIsUpdating(task._id)}/>
            </>
            )}
          </div>
       
        ))}
      </>
      
    </div>
  )
}

export default TasksLists