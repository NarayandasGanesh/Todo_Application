import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditTask = () => {
  const { taskId } = useParams();
  const [taskDetails, setTaskDetails] = useState({});
  const [updateItemText, setUpdateItemText] = useState('');

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const response = await axios.get(`https://cute-rose-camel-vest.cyclic.app/tasks/${taskId}`);
        setTaskDetails(response.data);
      } catch (error) {
        console.error('Error fetching task details:', error);
      }
    };

    fetchTaskDetails();
  }, [taskId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`https://cute-rose-camel-vest.cyclic.app/edit/${taskId}`, { item: updateItemText });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleUpdate}>
        <label>New Item:</label>
        <input
          type="text"
          value={updateItemText}
          onChange={(e) => setUpdateItemText(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditTask;
